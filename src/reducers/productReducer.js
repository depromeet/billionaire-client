import * as types from 'actions/actionTypes';

const initialState = {
  products: {
    status: null,
    data: null,
  },
  productDetail: {
    status: null,
    data: null,
  },
  join: {
    status: null,
  },
  airPollution: {
    status: null,
    data: null,
  },
  dpmSession: {
    status: null,
    data: null,
  },
  kakaotalk: {
    status: null,
    data: null,
  },
};

export default function productReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    case types.GET_PRODUCT_WAITING:
      return state = {
        ...state,
        products: {
          ...state.products,
          status: 'WAITING',
        },
      }
    
    case types.GET_PRODUCT_SUCCESS:
      return state = {
        ...state,
        products: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_PRODUCT_FAILURE:
      return state = {
        ...state,
        products: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    case types.GET_PRODUCT_DETAIL_WAITING:
      return state = {
        ...state,
        productDetail: {
          status: 'WAITING',
        },
      }
    
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return state = {
        ...state,
        productDetail: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_PRODUCT_DETAIL_FAILURE:
      return state = {
        ...state,
        productDetail: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    case types.JOIN_PRODUCT_WAITING:
      return state = {
        ...state,
        join: {
          status: 'WAITING',
        },
      }
    
    case types.JOIN_PRODUCT_SUCCESS:
      return state = {
        ...state,
        join: {
          status: 'SUCCESS',
        }
      }

    case types.JOIN_PRODUCT_FAILURE:
      return state = {
        ...state,
        join: {
          status: 'FAILURE',
          err: action.err,
        },
      }
    
    case types.GET_AIR_POLLUTION_WAITING:
      return state = {
        ...state,
        airPollution: {
          status: 'WAITING',
        },
      }
    
    case types.GET_AIR_POLLUTION_SUCCESS:
      return state = {
        ...state,
        airPollution: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_AIR_POLLUTION_FAILURE:
      return state = {
        ...state,
        airPollution: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    case types.GET_DPM_SESSION_WAITING:
      return state = {
        ...state,
        dpmSession: {
          status: 'WAITING',
        },
      }
    
    case types.GET_DPM_SESSION_SUCCESS:
      return state = {
        ...state,
        dpmSession: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_DPM_SESSION_FAILURE:
      return state = {
        ...state,
        dpmSession: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    case types.GET_KAKAOTALK_WAITING:
      return state = {
        ...state,
        kakaotalk: {
          status: 'WAITING',
        },
      }
    
    case types.GET_KAKAOTALK_SUCCESS:
      return state = {
        ...state,
        kakaotalk: {
          status: 'SUCCESS',
          data: action.response.data.response,
        }
      }

    case types.GET_KAKAOTALK_FAILURE:
      return state = {
        ...state,
        kakaotalk: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    

    default:
      return state;
  }
}