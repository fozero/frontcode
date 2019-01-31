/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:12:53
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-31 15:49:37
*/
import React, { Component } from 'react';
import AppTodos from './AppTodos';

// 这里map用到了es6的解构赋值
// 
class AppList extends Component {
  render() {
    const a = this.props.data.map(({ id, text, complete }, index) => {
       return  
           <AppTodos 
               key={index} 
               id={id} 
               text={text} 
               complete={complete}/>
    })

    return (
      <div> { a } </div>
    )
  }
}
export default AppList;