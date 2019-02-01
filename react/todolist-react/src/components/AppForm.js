/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:12:37
* @Last Modified by:   fozero
* @Last Modified time: 2019-02-01 02:15:02
*/
import React, { Component } from 'react';
// 随机生成id
import uuid from 'uuid';
// styles对象是jxs中的声明样式的一种方式，也可以使用className来添加样式
var styles = {
  'title': {
    width: 200,
    display: 'inline-block',
    marginRight: 10,
    verticalAlign: 'top'
  }
}
class AppForm extends Component {

	handleSubmit (event) {
	    event.preventDefault()
	    let text = this.refs.text.value
	    
	    if (!text.trim()) {
	      alert("不能为空")
	      return
	    }
	    
	    let id = uuid();
	    this.props.AddTodoItem({id,text,complete:false});
  }


  render() {
    return (
      <form className='ui reply form'
		onSubmit={this.handleSubmit.bind(this)}>
        <div className='field' style={styles.title}>
          <input type='text' placeholder='请输入待办事项' ref='text' />
        </div>

        <button type='submit' className='ui blue button'>
            添加
        </button>
      </form>
      );
  }
}
export default AppForm;