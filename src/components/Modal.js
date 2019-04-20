import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <>
        <div id="mask" className="mask"></div>
        <div id="modal" className="modal">
          { this.props.children }
        </div>
      </>
    );
  }
}

export default Modal;