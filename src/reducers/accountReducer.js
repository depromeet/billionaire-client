import * as types from 'actions/actionTypes';

const initialState = {
  accounts: {
    status: null,
    data: null,
  },
  transactions: {
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
          ...state.accounts,
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

    case types.GET_TRANSACTION_WAITING:
      return state = {
        ...state,
        transactions: {
          status: 'WAITING',
        },
      }
    
    case types.GET_TRANSACTION_SUCCESS:
      return state = {
        ...state,
        transactions: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_TRANSACTION_FAILURE:
      return state = {
        ...state,
        transactions: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    default:
      return state;
  }
}