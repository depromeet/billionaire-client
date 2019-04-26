import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginContainer, AccountContainer, AccountDetailContainer, 
  ProductContainer, RankingContainer } from 'containers';
import { Modal } from 'components';
import withModal from 'components/withModal';

import 'styles/App.scss';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      auth.status !== 'SUCCESS' ? 
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
        : <Component {...props} />
    )} />
  )
}

class App extends Component {
  componentDidMount() {
    if (this.props.auth.status === 'SUCCESS') {
      this.props.getMeRequest();
    }
  }

  render() {
    const { isModalOpened, attend } = this.props;
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginContainer} auth={this.props.auth} />
        
        <div className="wrapper">
          { 
            isModalOpened && attend && attend.status === "SUCCESS" &&
            attend.data.status === 200 &&
            <Modal>
              출석하였습니다. (임시 Modal입니다 ^_^)
              +{attend.data.data.response.point}家
              <button id="modalConfirm" className="btn-confirm" onClick={this.props.closeModal}>확인</button>
            </Modal>
          }
          <PrivateRoute exact path="/account" component={AccountContainer} auth={this.props.auth} />
          <PrivateRoute path="/account/detail" component={AccountDetailContainer} auth={this.props.auth} />
          <PrivateRoute exact path="/product" component={ProductContainer} auth={this.props.auth} />
          <PrivateRoute path="/product/:id" component={ProductContainer} auth={this.props.auth} />
          <PrivateRoute path="/ranking" component={RankingContainer} auth={this.props.auth} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withModal(App);
