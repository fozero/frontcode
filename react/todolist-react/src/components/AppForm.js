/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:12:37
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-31 15:34:58
*/
import React, { Component } from 'react';
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
  render() {
    return (
      <form className='ui reply form'>
        <div className='field' style={styles.title}>
          <input type='text' placeholder='TODO' ref='text' />
        </div>

        <button type='submit' className='ui blue button'>
            添加
        </button>
      </form>
      );
  }
}
export default AppForm;