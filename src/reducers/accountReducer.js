import * as types from 'actions/actionTypes';

const initialState = {
  accounts: {
    status: null,
    data: null,
  }
};

export default function accountReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    case types.GET_ACCOUNT_WAITING:
      return state = {
        ...state,
        accounts: {
          status: 'WAITING',
        },
      }
    
    case types.GET_ACCOUNT_SUCCESS:
      return state = {
        ...state,
        accounts: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_ACCOUNT_FAILURE:
      return state = {
        ...state,
        accounts: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    default:
      return state;
  }
}