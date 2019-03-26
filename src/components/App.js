import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { LoginContainer } from 'containers';
import { Deposit, Transfer, Stock, Ranking } from 'components';

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
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LoginContainer} auth={this.props.auth} />
        <PrivateRoute path="/deposit" component={Deposit} auth={this.props.auth} />
        <PrivateRoute path="/transfer" component={Transfer} auth={this.props.auth} />
        <PrivateRoute path="/stock" component={Stock} auth={this.props.auth} />
        <PrivateRoute path="/ranking" component={Ranking} auth={this.props.auth} />
      </BrowserRouter>
    );
  }
}

export default App;
