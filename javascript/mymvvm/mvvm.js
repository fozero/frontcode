
/**
1、实现observe
通过observe实现数据劫持，然后将数据的变更传递给Dep实例，Dep去通知下面完成接下来的事情

2、实现complie
complie需要做的事情
a、解析指令，将指令模板中的变量替换成数据，对视图进行初始化操作
b、订阅数据的变化，绑定好更新函数
c、接收到数据变化，通知视图进行view update

3、实现watcher
a、通过Dep接收数据变动的通知，实例化的时候将自己添加到dep中
b、属性变更时，接收dep的notify，调用自身update方法，触发Compile中绑定的更新函数，进而更新视图

4、实现mvvm
a、Observer实现对MVVM自身model数据劫持，监听数据的属性变更，并在变动时进行notify
b、Compile实现指令解析，初始化视图，并订阅数据变化，绑定好更新函数
c、Watcher一方面接收Observer通过dep传递过来的数据变化，一方面通知Compile进行view update
 */


/**
 * 发布消息
 * @Author   fozero
 * @DateTime 2019-06-30
 * @param    {[type]}   value [description]
 * @return   {[type]}         [description]
 */
function observe(value){
	if (!value || typeof value !== 'object') {
	    return;
	  }
	  return new Observer(value);
}

function Observer(value){
	this.value = value;
	this.walk(value);
}

Observer.prototype = {
	walk:function(obj){
		let that = this;
		Object.keys(obj).forEach(key => {
		    that.observeProperty(obj, key, obj[key])
		 })
	},
	observeProperty:function(obj,key,val){
		let dep = new Dep();
		let childOb = observe(val);
		Object.defineProperty(obj,key,{
			enumerable: true,   // 可枚举
	    	configurable: true, // 可重新定义
	    	get: function () {
	    		//收集依赖
	    		if(Dep.target){
	    			dep.depend();
	    		}
	    		if (childOb) {
		          childOb.dep.depend();
		        }
		      	return val;
		    },
		    set: function (newVal) {
		    	// (newVal !== newVal && val !== val)  用于判断NAN的情况
		    	if (val === newVal || (newVal !== newVal && val !== val)) {
			        return;
			    }
		    	console.log('数据更新啦 ', val, '=>', newVal);
		    	val = newVal;

		    	// 监听子属性
        		childOb = observe(newVal);

		    	// 通知数据变更
        		dep.notify();
		    }
		})
	}
}


/**
 * Dep依赖收集 管理watcher
 */
let uid = 0;
function Dep(){
	// Dep id
	this.id = uid++;
	// 用于存储watcher
	this.subs = [];

}
Dep.target = null;
Dep.prototype = {

	/**
	 * @Author   fozero
	 * @DateTime 2019-06-30
	 * @param    {[Watcher]}   sub [添加订阅者]
	 */
	addSub:function(sub){
		this.subs.push(sub);
	},

	/**
	 * @Author   fozero
	 * @DateTime 2019-06-30
	 * @return   {[Watcher]}   [移除订阅者]
	 */
	removeSub:function(sub){
		let index = this.subs.indexOf(sub);
		if(index !== -1){
			this.subs.splice(index,1);
		}
	},

	/**
	 * @Author   fozero
	 * @DateTime 2019-06-30
	 * @return   {[type]}   [通知数据变更]
	 */
	notify:function(){
		this.subs.forEach(sub=>{
			sub.update();
		})
	},

	// add watcher
	depend:function(){
		Dep.target.addDep(this);
	}	

}






/**
 * Compile模板指令解析
 */
function Compile(el, vm){
	// console.log('el',el,value)
	// this.$val = value;
	this.$vm = vm;
	  this.$el = this.isElementNode(el) ? el : document.querySelector(el);
	  if (this.$el) {
	  	this.$fragment = this.nodeFragment(this.$el);
	    this.compileElement(this.$el);
	    // 将文档碎片放回真实dom
    	this.$el.appendChild(this.$fragment)
	  }
}
Compile.prototype = {
	compileElement:function(el){
		let self = this;
	    let childNodes = el.childNodes;
	    [].slice.call(childNodes).forEach(node => {
	      let text = node.textContent;
	      let reg = /\{\{((?:.|\n)+?)\}\}/;
	      // 如果是element节点
	      if (self.isElementNode(node)) {
	        self.compile(node);
	      }
	      // 如果是text节点
	      else if (self.isTextNode(node) && reg.test(text)) {
	        // 匹配第一个选项
	        self.compileText(node, RegExp.$1.trim());
	      }
	      // 解析子节点包含的指令
	      if (node.childNodes && node.childNodes.length) {
	        self.compileElement(node);
	      }
	    })
	},
	// 文档碎片，遍历过程中会有多次的dom操作，为提高性能我们会将el节点转化为fragment文档碎片进行解析操作
	  // 解析操作完成，将其添加回真实dom节点中
	  nodeFragment: function (el) {
	    let fragment = document.createDocumentFragment();
	    let child;

	    while (child = el.firstChild) {
	      fragment.appendChild(child);
	    }
	    return fragment;
	  },
	// 指令解析
	  compile: function (node) {
	    let nodeAttrs = node.attributes;
	    let self = this;

	    [].slice.call(nodeAttrs).forEach(attr => {
	      var attrName = attr.name;
	      if (self.isDirective(attrName)) {
	        var exp = attr.value;
	        // node.innerHTML = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp];

	        var dir = attrName.substring(2);
	        // 事件指令
	        if (self.isEventDirective(dir)) {
	          compileUtil.eventHandler(node, self.$vm, exp, dir);
	        }
	        // 普通指令
	        else {
	          compileUtil[dir] && compileUtil[dir](node, self.$vm, exp);
	        }

	        node.removeAttribute(attrName);
	      }
	    });
	  },
	  // {{ test }} 匹配变量 test
	  compileText: function (node, exp) {
	    // node.textContent = typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp];
	    compileUtil.text(node, this.$vm, exp);
	  },
	  // element节点
	  isElementNode: function (node) {
	  	console.log('node',node.nodeType)
	    return node.nodeType === 1;
	  },
	  // text纯文本
	  isTextNode: function (node) {
	    return node.nodeType === 3
	  },
	  // x-XXX指令判定
	  isDirective: function (attr) {
	    return attr.indexOf('x-') === 0;
	  },
	  // 事件指令判定
	  isEventDirective: function (dir) {
	    return dir.indexOf('on') === 0;
	  }
}


// 定义$elm，缓存当前执行input事件的input dom对象
let $elm;
let timer = null;
// 指令处理集合
const compileUtil = {
  html: function (node, vm, exp) {
    this.bind(node, vm, exp, 'html');
  },
  text: function (node, vm, exp) {
    this.bind(node, vm, exp, 'text');
  },
  class: function (node, vm, exp) {
    this.bind(node, vm, exp, 'class');
  },
  model: function(node, vm, exp) {
    this.bind(node, vm, exp, 'model');

    let self = this;
    let val = this._getVmVal(vm, exp);
    // 监听input事件
    node.addEventListener('input', function (e) {
      let newVal = e.target.value;
      $elm = e.target;
      if (val === newVal) {
        return;
      }
      // 设置定时器  完成ui js的异步渲染
      clearTimeout(timer);
      timer = setTimeout(function () {
        self._setVmVal(vm, exp, newVal);
        val = newVal;
      })
    });
  },
  bind: function (node, vm, exp, dir) {
    let updaterFn = updater[dir + 'Updater'];

    updaterFn && updaterFn(node, this._getVmVal(vm, exp));

    new Watcher(vm, exp, function(value, oldValue) {
      updaterFn && updaterFn(node, value, oldValue);
    });
  },// 事件处理
  eventHandler: function(node, vm, exp, dir) {
    let eventType = dir.split(':')[1];
    let fn = vm.$options.methods && vm.$options.methods[exp];

    if (eventType && fn) {
      node.addEventListener(eventType, fn.bind(vm), false);
    }
  },
  /**
   * [获取挂载在vm实例上的value]
   * @param  {[type]} vm  [mvvm实例]
   * @param  {[type]} exp [expression]
   */
  _getVmVal: function (vm, exp) {
    let val = vm;
    exp = exp.split('.');
    exp.forEach(key => {
      key = key.trim();
      val = val[key];
    });
    return val;
  },
  /**
   * [设置挂载在vm实例上的value值]
   * @param  {[type]} vm    [mvvm实例]
   * @param  {[type]} exp   [expression]
   * @param  {[type]} value [新值]
   */
  _setVmVal: function (vm, exp, value) {
    let val = vm;
    exps = exp.split('.');
    exps.forEach((key, index) => {
      key = key.trim();
      if (index < exps.length - 1) {
        val = val[key];
      }
      else {
        val[key] = value;
      }
    });
  }
}


// 指令渲染集合
const updater = {
  htmlUpdater: function (node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value;
  },
  textUpdater: function (node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value;
  },
  classUpdater: function () {},
  modelUpdater: function (node, value, oldValue) {
    // 不对当前操作input进行渲染操作
    if ($elm === node) {
      return false;
    }
    $elm = undefined;
    node.value = typeof value === 'undefined' ? '' : value;
  }
}



/**
 * Watcher
 * @Author   fozero
 * @DateTime 2019-07-01
 * @param    {[type]}   vm      [description]
 * @param    {[type]}   expOrFn [description]
 * @param    {Function} cb      [description]
 */
function Watcher(vm,expOrFn,cb){
	this.vm = vm;
	expOrFn = expOrFn.trim();
  	this.expOrFn = expOrFn;
	this.cb = cb;
	this.depIds = {};
	if (typeof expOrFn === 'function') {
	    this.getter = expOrFn
	  }
	  else {
	    this.getter = this.parseGetter(expOrFn);
	  }
	this.value = this.get();
}
Watcher.prototype = {
	update:function(){
		this.run();
	},
	run:function(){
		let newVal = this.get();
	    let oldVal = this.value;
	    if (newVal === oldVal) {
	      return;
	    }
	    this.value = newVal;
	    // 将newVal, oldVal挂载到MVVM实例上
    	this.cb.call(this.vm, newVal, oldVal);
	},
	get:function(){
		Dep.target = this;  // 将当前订阅者指向自己
		let value = this.getter.call(this.vm, this.vm); // 触发getter，将自身添加到dep中
		Dep.target = null;  // 添加完成 重置
		return value;
	},
	// 添加Watcher to Dep.subs[]
	  addDep: function (dep) {
	    if (!this.depIds.hasOwnProperty(dep.id)) {
	      dep.addSub(this);
	      this.depIds[dep.id] = dep;
	    }
	  },
	parseGetter: function (exp) {
	    if (/[^\w.$]/.test(exp)) return;

	    let exps = exp.split('.');

	    // 简易的循环依赖处理
	    return function(obj) {
	        for (let i = 0, len = exps.length; i < len; i++) {
	            if (!obj) return;
	            obj = obj[exps[i]];
	        }
	        return obj;
	    }
	  }
}


/**
 * MVVM双向绑定
 * @Author   fozero
 * @DateTime 2019-07-01
 * @param    {[type]}   options [description]
 */
function MVVM(options){
	this.$options = options || {};
  	let data = this._data = this.$options.data;
	let self = this;
	Object.keys(data).forEach(key => {
	    self._proxyData(key);
	  });
	observe(data, this);
	new Compile(options.el || document.body, this);

}
MVVM.prototype = {
	/**
	 * @Author   fozero
	 * @DateTime 2019-07-01
	 * @param    {[type]}   key    [数据key]
	 * @param    {[type]}   setter [属性setter]
	 * @param    {[type]}   getter [属性getter]
	 * @return   {[type]}          [description]
	 */
	_proxyData:function(key,setter, getter){
		let self = this;
		setter = setter ||
		Object.defineProperty(self,key,{
			configurable: false,
      		enumerable: true,
      		get: function proxyGetter() {
		        return self._data[key];
		      },
		      set: function proxySetter(newVal) {
		        self._data[key] = newVal;
		      }
		})
	}
}




