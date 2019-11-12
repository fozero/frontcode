import React, { Component } from 'react';
import { connect } from 'react-redux'
class ComB extends Component {
  render() {
    return (
      <div>
        ComB组件
        <div>{this.props.text}</div>
      </div>
    );
  }
}

// export default ComB;
const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}
export default connect(mapStateToProps)(ComB)