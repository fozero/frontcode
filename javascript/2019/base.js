

/**
 * 以下输出结果是多少  
 这道题涉及了异步、作用域、闭包

settimeout是异步执行，10ms后往任务队列里面添加一个任务，只有主线上的全部执行完，才会执行任务队列里的任务，当主线执行完成后，i是4，所以此时再去执行任务队列里的任务时，i全部是4了。对于打印4次是：

 每一次for循环的时候，settimeout都执行一次，但是里面的函数没有被执行，而是被放到了任务队列里面，等待执行，for循环了4次，就放了4次，当主线程执行完成后，才进入任务队列里面执行。
 　　（注意：for循环从开始到结束的过程，需要维持几微秒或几毫秒。)
当我把var 变成let 时
for(let i=0;i<=3;i++){ setTimeout(function() {  console.log(i)  }, 10);}
打印出的是：0,1,2,3
当解决变量作用域，
因为for循环头部的let不仅将i绑定到for循环快中，事实上它将其重新绑定到循环体的每一次迭代中，确保上一次迭代结束的值重新被赋值。setTimeout里面的function()属于一个新的域，通过 var 定义的变量是无法传入到这个函数执行域中的，通过使用 let 来声明块变量，这时候变量就能作用于这个块，所以 function就能使用 i 这个变量了；这个匿名函数的参数作用域 和 for参数的作用域 不一样，是利用了这一点来完成的。这个匿名函数的作用域有点类似类的属性，是可以被内层方法使用的。

 */
for(var i=0;i<10;i++){
	setTimeout(()=>{
		console.log(i)  // 打印了10次10
	},1000)
}


// 解决  1、使用闭包
for(var i=0;i<10;i++){
	(function(i){
		setTimeout(function(){
			console.log(i)
		},1000);
	})(i)
}

// 2、使用let声明
for(let i=0;i<10;i++){
	setTimeout(()=>{
		console.log(i)
	},1000)
}






/**
 * 函数防抖
 * 使用场景：js有些事件例如resize，mousemove等是会不间断触发的，例如我们简单的一个scroll事件
 我们需要在滚动的时候去做一些事情，如上图可见，我们只是简单的console，在一次滚动过程中函数即执行了将近20次，如果这个函数有更为复杂的方法，比如操作dom或者其他交互，会严重影响性能。为了避免这个问题，我们一般会使用定时器来对函数进行节流。
 * 实现：函数节流的基本思想是设置一个定时器，在指定时间间隔内运行代码时清楚上一次的定时器，并设置另一个定时器，知道函数请求停止并超过时间间隔才会执行。
 */
let delay;
function throttle(fn,time){
	clearTimeout(delay);
	delay = setTimeout(() => {
        fn && fn();
    },time)
}
function loadimg(){
	throttle(()=>{
		// todo 图片加载
		console.log(1)
	},250);
}
window.addEventListener('scroll',loadimg,false);




/**
 * 倒计时计算距离2020年还剩余xx天xx小时xx分钟xx秒
 */

function counter(){
	var date = new Date();
	var year = date.getFullYear();
	var date2 = new Date(year, 11,31,23,59,59);
	/*转换成秒*/
    var time = (date2 - date) / 1000;
    var day = Math.floor(time / (24* 60* 60))
    var hour = Math.floor(time % (24* 60* 60) / (60* 60))
    var minute = Math.floor(time % (24* 60* 60) % (60* 60) / 60);
    var second = Math.floor(time % (24* 60* 60) % (60* 60) % 60);
    var str = year + "年还剩"+ day + "天"+ hour + "时"+ minute + "分"+ second + "秒";
    console.log(str)
}
setInterval('counter()',1000);




/**
 * js计算时间差,包括计算，天，时，分，秒
 * @type {Date}
 */
var date1=new Date();  //开始时间

var date2=new Date(2019,11,31,23,59,59);    //结束时间
var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数

//计算出相差天数
var days=Math.floor(date3/(24*60*60*1000))
//计算出小时数
var leave1=date3%(24*60*60*1000)    //计算天数后剩余的毫秒数
var hours=Math.floor(leave1/(60*60*1000))
//计算相差分钟数
var leave2=leave1%(60*60*1000)        //计算小时数后剩余的毫秒数
var minutes=Math.floor(leave2/(60*1000))
//计算相差秒数
var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
var seconds=Math.round(leave3/1000)
console.log(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")



/**
 * 数组转换Array.prototype.slice.call(arguments)
 */
function add() {
    console.log(JSON.stringify(arguments));//{"0":1,"1":2}
    var _args = Array.prototype.slice.call(arguments);
    console.log(JSON.stringify(_args));//[1,2]
} 
add(1,2);



/**
 * reduce实现
 * 
 */

// reduce实现
Array.prototype.myReduce = function (cb, initialValue) {
  const array = this
  let acc = initialValue || array[0]
  const startIndex = initialValue ? 0 : 1

  for (let i = startIndex; i < array.length; i++) {
    const cur = array[i]
    acc = cb(acc, cur, i, array)
  }
  return acc
}

var arr = [1,2,3]
var sum = arr.myReduce(function(pre,cur,index,arr){
    console.log('pre',pre)
    return pre+cur
})
console.log('sum',sum)





/**
 * 使用reduce实现map，filter方法
 * 将数列中的值进行翻倍，然后挑选出大于50的数
 */

var nums = [20,30,40,50,60];

var result = nums.reduce((finalList,num)=>{
    num = num*2;
    if(num>50){
        finalList.push(num);
    }
    return finalList
},[]);
result// [60, 80, 100, 120]



/**
 * 箭头函数this的理解
 */
// 不用箭头函数
var obj = {
    name:'kerry',
    age:20,
    getAge:function(){
        var _age = this.age;
        var that = this
        var fn = function(){
            return that.age;
        }
        return fn();
    }
}
obj.getAge();//undefined   解决：使用hack var that = this

// 使用箭头函数
var obj = {
    name:'kerry',
    age:20,
    getAge:function(){
        var _age = this.age;
        var fn = ()=>{
            return this.age;
        }
        return fn();
    }
}
obj.getAge();//20



// js变量
var bb = 1;
function A(bb){
    console.log('1111',bb);//1
    bb = 2;
    // 此时这段代码不会执行
    return function(){
        console.log('2222',bb);//2
    }
}
A(bb);
console.log('3333',bb);//1




/**
 * 60秒倒计时
 */

var wait = 10;
var timer = null;
var fn = function(){
    wait--;
    console.log('倒计时',wait)
    if(wait<=0){
        clearTimeout(timer);
    }else{
        timer = setTimeout(fn,1000);
    }
}
setTimeout(fn,0);



/**
 * async await执行顺序
 */

async function async1(){
     console.log('11111');//1
    await async2();
    console.log('2222')//4
}

async function async2(){
    console.log('3333')//2
}

async1();
console.log('4444')//3


/**
 * async返回的是一个promise对象
 */
function async1(){
     return 1
}

function async2(){
    return 2
}

async function testRes(){
     console.log('我先执行')
    var n1 = await async1();
    var n2 = await async2();
    console.log('num',n1+n2)
}

testRes();
 console.log('不用等我')




/**
 * 面试题  async await promise执行顺序
 */

async function async1(){
    console.log('async1 start')//2
    await async2()
    console.log('async1 end')//6
}
async function async2(){
    console.log('async2')//3
}
console.log('script start')//1
setTimeout(function(){
    console.log('setTimeout') //8
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')//4
    resolve();
}).then(function(){
    console.log('promise2')//7
})
console.log('script end')//5







/**
 * 思考：给对象添加同名属性和方法时会发生什么
 */
function Hello(){
    this.name = '阿健';
}
Hello.prototype.name = '假的阿健'

var hello = new Hello();
hello.name//阿健


/**
 * 原型链
 */
var o = new Object();
o.__proto__ = Object.prototype;







var a =1;
foo();
function foo(){
    console.log(a);
    var a=b=2;
    console.log(b);
}
console.log(a);
console.log('ss',b);


var a =1;
// foo();
function foo(){
    // var a=b=2;
    var b=2;
    console.log(b);
}
console.log('ss',b);


/**
 * js算法相关
 */
/**
 1.异或的定义
异或的定义如下：

只有在两个比较的位不同时其结果是1，否则结果为0

即“两个输入相同时为0，不同则为1”！
 */



/**
JavaScript实现二分法查找
二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：
（1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
（2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
（3）如果某一步数组为空，则表示找不到目标元素。
 */

 /**
 * 非递归算法
 */
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while(low <= high){
        var mid = parseInt((high + low) / 2);
        if(key == arr[mid]){
            return  mid;
        }else if(key > arr[mid]){
            low = mid + 1;
        }else if(key < arr[mid]){
            high = mid -1;
        }else{
            return -1;
        }
    }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr,10);
alert(result); // 9 返回目标元素的索引值       


 
/**
 * 递归算法
 */
function binary_search(arr,low, high, key) {
    if (low > high){
        return -1;
    }
    var mid = parseInt((high + low) / 2);
    if(arr[mid] == key){
        return mid;
    }else if (arr[mid] > key){
        high = mid - 1;
        return binary_search(arr, low, high, key);
    }else if (arr[mid] < key){
        low = mid + 1;
        return binary_search(arr, low, high, key);
    }
};
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binary_search(arr, 0, 13, 10);
alert(result); // 9 返回目标元素的索引值  



/**
 * 计算一个整数数组中最大差值的元素
 */

var arr = [4,2,7,5,11,13,9,0,12];
var min = arr[0],maxDiffValue = 0;
arr.forEach((el,index)=>{
    if(min>el) min = el;
    var diff = el - min;
    if(diff>maxDiffValue){
        maxDiffValue = diff;
    }
})
console.log(maxDiffValue)




/**
 * js返回两个数组的差异值
 */
function diff(arr1, arr2) {
  var newArr = [];
  var arr3 = [];
  for (var i=0;i<arr1.length;i++) {
    if(arr2.indexOf(arr1[i]) === -1)   
      arr3.push(arr1[i]);
  }
   var arr4 = [];
  for (var j=0;j<arr2.length;j++) {
    if(arr1.indexOf(arr2[j]) === -1)
      arr4.push(arr2[j]);
  }
   newArr = arr3.concat(arr4);
  return newArr;
}
 
diff([1, 2, 3], [1, 2, 4]);




/**
 * 数列11235813...n  计算第n项的值
 */

function fb(n){
    return (n===1 || n===2) ? 1 : fb(n-1)+fb(n-2);
}
console.log('value：',fb(7));//13


/**
 * 求一个n x m二位数组每行的最大值
 */
var arr = [
    [1,5,8],
    [3,2,6],
    [4,1,5]
];
function rowBigValue(arr){
    for(var i=0;i<arr.length;i++){
        var max = arr[i][0];
        for(var j=0;j<arr[i].length;j++){
            if(arr[i][j]>max){
                max = arr[i][j];
            }
        }
        console.log(arr[i],max)
    }
}
rowBigValue(arr);
// 结果
// [1, 5, 8] 8
// [3, 2, 6] 6
// [4, 1, 5] 5



/**
 * 求一个n x m二位数组每列的最大值
 */
var arr = [
    [1,5,8],
    [3,2,6],
    [4,1,5]
];
function rowBigValue(arr){
    var val = {a:0,b:0,c:0}
    for(var i=0;i<arr.length;i++){
        val.a = arr[i][0]>val.a?arr[i][0]:val.a;
        val.b = arr[i][1]>val.b?arr[i][1]:val.b;
        val.c = arr[i][2]>val.c?arr[i][2]:val.c;
    }
    return val;
}
rowBigValue(arr);//{a: 4, b: 5, c: 8}


/**
 * 求nxm二维数组每列的最大值(使用reduce)
 */
 var obj = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
    { a: 2, b: 3, c: 10 }
 ];

 obj.reduce(function(total,value,index,arr){
  return {
    a:total.a>value.a?total.a:value.a,
    b:total.b>value.b?total.b:value.b,
    c:total.c>value.c?total.c:value.c,
  } 
})


/**
 * js二维数组列累加求和
 */

var obj = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
    { a: 2, b: 3, c: 10 }
 ];

 obj.reduce(function(total,value,index,arr){
  return {
    a:total.a+value.a,
    b:total.b+value.b,
    c:total.c+value.c
  } 
})


/**
 * 字母归类排序  例如，AABCAADDEEA
排序后是，AAAAABCDDEE
 */

var str = 'AABCAADDEEA';
function cateG(str){
    var obj = {};
    for(var i=0;i<str.length;i++){
        var key = str[i];
        if(obj[key]){
            obj[key] += key
        }else{
            obj[key] = str[i]
        }
    }
    
    var arr = [];
    for(item in obj){
        arr.push(obj[item]);
    }
    return arr.join('');

}
cateG(str) //"AAAAABCDDEE"


/**
 * 统计数组元素出现的次数
 */
function eleCount(arr){
    var obj = {}
    for(var i=0;i<arr.length;i++){
        var key = arr[i]
        if(obj[key]){
            obj[key]++
        }else{
            obj[key] = 1
        }
    }
    return obj
}
eleCount([0,1,1,4,1,3,0])//{0: 2, 1: 3, 3: 1, 4: 1}



/**
 * 给一个整数数组，找到两个数使得他们的和等于一个给定的数 target
 */
function findNums(arr,target){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [arr[i],arr[j]]
            }
        }
    }
}

var arr = [1,3,8,10,4];
findNums(arr,18);





