import * as types from 'actions/actionTypes';

const initialState = {
  products: {
    status: null,
    data: null,
  },
  productDetail: {
    status: null,
    data: null,
  }
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
    default:
      return state;
  }
}