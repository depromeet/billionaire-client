import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers'
import * as serviceWorker from './serviceWorker';

let store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
