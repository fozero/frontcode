import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import AppList from './components/AppList.js'
import AppForm from './components/AppForm.js'
import AppFooter from './components/AppFooter.js'


// app.js容器组件

class App extends Component {
  state = {
      choosevalue : 1,
      data: this.props.data
  }
  render() {
    const { data } = this.state; 
    return (
      <div className="App">
        <AppForm />
        <AppList data={data}/>
        <AppFooter />
      </div>
    );
  }
}

export default App;
