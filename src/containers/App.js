import React, { Component } from 'react';
import { BrowserRouter, Route, /* Redirect */ } from 'react-router-dom';
import { Login, Deposit, Transfer, Stock, Ranking } from 'containers';

import 'styles/App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/stock" component={Stock} />
        <Route path="/ranking" component={Ranking} />
        {/* <Route render={() => (
          <Redirect to="/deposit" />
        )}/> */}
      </BrowserRouter>
    );
  }
}

export default App;
