import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginContainer, DashboardContainer, AccountContainer, ProductContainer, RankingContainer } from 'containers';
import { AccountDetail, Transfer } from 'components';

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
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginContainer} auth={this.props.auth} />
        
        <div className="wrapper">
          <PrivateRoute path="/dashboard" component={DashboardContainer} auth={this.props.auth} />
          <PrivateRoute exact path="/account" component={AccountContainer} auth={this.props.auth} />
          <PrivateRoute path="/account/detail" component={AccountDetail} auth={this.props.auth} />
          <PrivateRoute exact path="/product" component={ProductContainer} auth={this.props.auth} />
          <PrivateRoute path="/product/:id" component={ProductContainer} auth={this.props.auth} />
          <PrivateRoute path="/transfer" component={Transfer} auth={this.props.auth} />
          <PrivateRoute path="/ranking" component={RankingContainer} auth={this.props.auth} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
