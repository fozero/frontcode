/*
* @Author: fozero@126.
* @Date:   2019-01-31 15:13:05
* @Last Modified by:   fozero
* @Last Modified time: 2019-01-31 19:35:11
*/
import React, { Component } from 'react';

var styles = {
  'title': {
    marginRight: 10,
    fontSize: 20
  },

  'top': {
    marginTop: 40
  }
}


// 通过refs来获取value值  this.refs.complete.value

class AppTabs extends Component {

	handleAll () {
	    let all = this.refs.all.value;
	    this.props.SubmitChooseValue(all);
	}

	handleActive () {
	    let active = this.refs.active.value;
	    this.props.SubmitChooseValue(active);
	}

	handleComplete () {
	    let complete = this.refs.complete.value
	    this.props.SubmitChooseValue(complete);
	}


  render() {
    return (
      <div>
        <button 
           type='submit' 
           style={styles.top} 
           className='ui blue button' 
           value='1' 
           ref='all'
           onClick={this.handleAll.bind(this)}
         > 
           全部 
        </button>
        <button 
           type='submit' 
           style={styles.top} 
           className='ui blue button' 
           value='2' 
           ref='active'
           onClick={this.handleActive.bind(this)}
        > 
           还未完成 
        </button>
        <button 
           type='submit' 
           style={styles.top} 
           className='ui blue button' 
           value='3' 
           ref='complete'
           onClick={this.handleComplete.bind(this)}
        > 
           已完成 
        </button>
      </div>
      );
  }
}
export default AppTabs;