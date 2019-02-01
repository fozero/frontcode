import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import AppList from './components/AppList.js'
import AppForm from './components/AppForm.js'
import AppTabs from './components/AppTabs.js'


// app.js容器组件


// react父子组件通信
// app.js  form子组件 
// 1、app.js添加OnAddTodoItem函数 用于合并data，并更新state
//   OnAddTodoItem (newItem) {
//     let newdata = this.state.data.concat(newItem);
//     this.setState({data : newdata});
//   }
//   2、在AppForm组件标签添加AddTodoItem函数bind指向OnAddTodoItem
//   <AppForm 
//           AddTodoItem={this.OnAddTodoItem.bind(this)} />
//           3、form.js子组件中通过props触发AddTodoItem函数
// this.props.AddTodoItem({id,text,complete:false});





class App extends Component {
  state = {
      choosevalue : 1,//筛选 1全部 2未完成 3已完成
      data: this.props.data
  }


  // 合并data，并更新state
  OnAddTodoItem (newItem) {
    let newdata = this.state.data.concat(newItem);
    this.setState({data : newdata});
  }

  // 筛选函数
  ChooseValue (id) {
    this.setState({choosevalue:id});
  }


// 状态修改
  AllChangeComplete(id){
    let newdata = this.state.data.map((item,index) => {
        if(item.id === id) {
          item.complete = !item.complete;
        }
        return item;
    })
    this.setState({data : newdata});
  }

  // 删除任务
  AllOnDeleteItem(id){
    let newdata = this.state.data.map(function (item) {
      console.log(item);
      if (item.id == id) {
        item.deleteFlag = true
      }
      return item
    })
    this.setState({ data: newdata })
  }

  render() {
    const { data } = this.state; 
    return (
      <div className="App">
        <AppForm 
          AddTodoItem={this.OnAddTodoItem.bind(this)} />

        <AppTabs SubmitChooseValue={this.ChooseValue.bind(this)}/>
        <AppList 
          data={this.state.data}
          choosevalue={this.state.choosevalue} 
          ChangeCompleteTop={this.AllChangeComplete.bind(this)}
          DeleteItemTop={this.AllOnDeleteItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
