import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginContainer, AccountContainer, AccountDetailContainer, 
  ProductContainer, RankingContainer } from 'containers';
import { ToastMessage } from 'components';
import withModal from 'components/withModal';

import 'styles/App.scss';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      !localStorage.getItem('token') ? 
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
    // if (this.props.auth.status === 'SUCCESS') {
    if (localStorage.getItem('token')) {
      this.props.getMeRequest();
    }
  }

  render() {
    const { isModalOpened, attend } = this.props;
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginContainer} />
        
        <div className="wrapper">
          { 
            isModalOpened && attend && attend.status === "SUCCESS" &&
            attend.data.status === 200 &&
            <ToastMessage>
              <p>출석하였습니다.</p>
              <p>
                <span className="money">+{attend.data.data.response.point}</span> 家
              </p>
            </ToastMessage>
          }
          <PrivateRoute exact path="/account" component={AccountContainer} />
          <PrivateRoute path="/account/detail" component={AccountDetailContainer} />
          <PrivateRoute exact path="/product" component={ProductContainer} />
          <PrivateRoute path="/product/:id" component={ProductContainer} />
          <PrivateRoute path="/ranking" component={RankingContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withModal(App);
