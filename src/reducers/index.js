import authReducer from './authReducer';
import depositReducer from './depositReducer';
import transferReducer from './transferReducer';
import stockReducer from './stockReducer';
import rankingReducer from './rankingReducer';

import { combineReducers } from 'redux';

export default combineReducers(
  {
    authReducer, depositReducer, transferReducer,
    stockReducer, rankingReducer,
  }
);