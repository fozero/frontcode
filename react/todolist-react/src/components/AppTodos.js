/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:38:46
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-31 15:50:53
*/
import React, { Component } from 'react';

var styles = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative'
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppTodos extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='content'>
          <span 
               className='author' 
                style={styles.title} 
          >
              {this.props.text}
              <span 
                   className={this.props.complete ? 'line' : ''} 
              />
          </span>
          <span className='author' 
                style={styles.title}>
                {this.props.complete ? '已完成' : '未完成'}
          </span>
          <span className='author'>{this.props.id}</span>
          <span className='ui blue button' 
                style={styles.delete} >
                删除
          </span>  
        </div>
      </div>
      );
  }
}
export default AppTodos;