import loginReducer from './loginReducer';
import depositReducer from './depositReducer';
import transferReducer from './transferReducer';
import stockReducer from './stockReducer';
import rankingReducer from './rankingReducer';

import { combineReducers } from 'redux';

export default combineReducers(
  {
    loginReducer, depositReducer, transferReducer,
    stockReducer, rankingReducer,
  }
);