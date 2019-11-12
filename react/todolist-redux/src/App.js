import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './store/actions'
import './App.css'
import ComA from './components/ComA'
import ComB from './components/ComB'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      input:''
    }
  }
  doPlus(){
    this.setState({
      count: this.state.count+1
    })
  }
  doReduce(){
    this.setState({
      count: this.state.count - 1
    })
  }
  updateInput(value){
    this.setState({
      input: value
    })
  }
  // 这个地方要使用箭头函数 ，否则会报错 无法访问this.props
  handleAddTodo=()=>{
    // dispatches actions to add todo
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }
  render() {
    return (
      <div className='container'>
        <div>加减计算</div>
        <div className='calc'>
          <div className='count'>{this.state.count}</div>
          <div className='plus' onClick={this.doPlus.bind(this)}>加</div>
          <div className='reduce' onClick={this.doReduce.bind(this)}>减</div>
        </div>
        <div>todolist redux</div>
        <div>
          <input type="text" onChange={e => this.updateInput(e.target.value)} value={this.state.input}/>
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
        <div>
          <ComA></ComA>
          <ComB></ComB>
        </div>
      </div>
    );
  }
}


/*
1、在组件中通过dispatch触发action事件
2、reducer负责修改并返回state状态
3、通过mapStateToProps获取到state
4、组件通过props访问state数据
*/
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    text: state.text
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => dispatch(addTodo(text))
  }
}

// const mapDispatchToProps = { increment, decrement, reset }


// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)