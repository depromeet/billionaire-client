import React, { Component } from 'react';
import 'styles/ToastMessage.scss';

class ToastMessage extends Component {
  state = {
    isMessageOpened: true,
  }

  closeMessage = () => {
    this.setState(() => ({
      isMessageOpened: false
    }));
  }

  render() {
    return (
      <>
      {
        this.state.isMessageOpened && 
        <div class="toast-container" onClick={this.closeMessage}>
          <div id="mask" className="mask"></div>
          <div id="toast" className="toast">
            <div className="toast-message">
              { this.props.children }
            </div>
          </div>
        </div>
      }
      </>
    );
  }
}

export default ToastMessage;