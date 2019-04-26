import authReducer from './authReducer';
import accountReducer from './accountReducer';
import productReducer from './productReducer';
import rankingReducer from './rankingReducer';

import { combineReducers } from 'redux';

export default combineReducers(
  {
    authReducer, accountReducer,
    productReducer, rankingReducer,
  }
);