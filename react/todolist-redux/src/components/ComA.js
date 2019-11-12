import React, { Component } from 'react';
import { connect } from 'react-redux'
class ComA extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        ComA组件
        <div>{this.props.text}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}
export default connect(mapStateToProps)(ComA)
// export default ComA;