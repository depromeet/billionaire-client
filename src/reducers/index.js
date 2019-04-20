import authReducer from './authReducer';
import accountReducer from './accountReducer';
import transferReducer from './transferReducer';
import productReducer from './productReducer';
import rankingReducer from './rankingReducer';

import { combineReducers } from 'redux';

export default combineReducers(
  {
    authReducer, accountReducer, transferReducer,
    productReducer, rankingReducer,
  }
);