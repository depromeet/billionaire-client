import React, { Component } from 'react';

const withModal = (WrappedComponent) => {
  return class extends Component {
    state = {
      isModalOpened: true,
    }

    closeModal = () => {
      this.setState(() => ({
        isModalOpened: false
      }))
    }

    render () {
      return (
        <WrappedComponent {...this.props}
          isModalOpened={this.state.isModalOpened}
          closeModal={this.closeModal} />
      )
    }
  }
}

export default withModal;