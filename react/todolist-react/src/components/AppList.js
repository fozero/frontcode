/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:12:53
* @Last Modified by:   fozero
* @Last Modified time: 2019-02-01 02:18:32
*/
import React, { Component } from 'react';
import AppTodos from './AppTodos';

// 这里map用到了es6的解构赋值
// for循环遍历
// return (
//       <div>
//       	{this.props.data.map(({ id, text, complete }, index) => (
//           <AppTodos 
//                key={index} 
//                id={id} 
//                text={text} 
//                complete={complete}/>
//         ))}
//       </div>
//     )
//     


// render() {

// 	// 通过不同的choosevalue值 过滤list内容
// 	var value = this.props.choosevalue;
// 	// alert(value)

//     return (
//       <div>
//       	{this.props.data.map(({ id, text, complete }, index) => (
//       		<AppTodos 
// 	               key={index} 
// 	               id={id} 
// 	               text={text} 
// 	               complete={complete}/>
//         ))}
//       </div>
//     )
//   }
//   
// 除了以上这种方式，也可以这样
// 	render() {

// 	// 通过不同的choosevalue值 过滤list内容
// 	var value = this.props.choosevalue;
// 	// alert(value)
// 	var list = this.props.data.map(({ id, text, complete }, index) => {
// 		return <AppTodos 
//                key={index} 
//                id={id} 
//                text={text} 
//                complete={complete}/>
// 	})
//     return (
//       <div>{list}</div>
//     )
//   }






class AppList extends Component {

SubmitDelete (id) {
    this.props.DeleteItemTop(id)
  }

  ChangeDone (id) {
    this.props.ChangeCompleteTop(id);
  }

  render() {

	// 通过不同的choosevalue值 过滤list内容
	var value = this.props.choosevalue;
	// alert(value)
	var list = this.props.data.map(({ id, text, complete ,deleteFlag}, index) => {
		if(value=='1' && deleteFlag !== true){
			return <AppTodos 
               key={index} 
               id={id} 
               text={text} 
               complete={complete}
               ChangeCompleteItem={this.ChangeDone.bind(this)}                         
               DeleteItem={this.SubmitDelete.bind(this)}/>
		} 
		if(value =='2' && complete === false && deleteFlag !== true){
			return <AppTodos 
               key={index} 
               id={id} 
               text={text} 
               complete={complete}
               ChangeCompleteItem={this.ChangeDone.bind(this)}                         
               DeleteItem={this.SubmitDelete.bind(this)}/>
		}
		if(value =='3' && complete === true && deleteFlag !== true){
			return <AppTodos 
               key={index} 
               id={id} 
               text={text} 
               complete={complete}
               ChangeCompleteItem={this.ChangeDone.bind(this)}                         
               DeleteItem={this.SubmitDelete.bind(this)}/>
		}
		// return 0;
	})
    return (
      <div>{list}</div>
    )
  }
}
export default AppList;