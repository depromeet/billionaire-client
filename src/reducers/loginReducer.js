import * as types from 'actions/actionTypes';

const initialState = {
  kakaoAuthorize: {
    status: null,
    token: null,
  },
  auth: {
    status: null,
    response: null,
  },
};

export default function loginReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    case types.KAKAO_AUTHORIZE_WAITING:
      return state = {
        ...state,
        kakaoAuthorize: {
          status: 'WAITING',
        },
      }
    
    case types.KAKAO_AUTHORIZE_SUCCESS:
      return state = {
        ...state,
        kakaoAuthorize: {
          status: 'SUCCESS',
          token: action.authObj.access_token,
        },
      }

    case types.KAKAO_AUTHORIZE_FAILURE:
      return state = {
        ...state,
        kakaoAuthorize: {
          status: 'FAILURE',
        },
      }

    case types.AUTH_WAITING:
      return state = {
        ...state,
        auth: {
          status: 'WAITING',
        },
      }
      
    case types.AUTH_SUCCESS:
      return state = {
        ...state,
        auth: {
          status: 'SUCCESS',
          response: action.response,
        },
      }

    case types.AUTH_FAILURE:
      return state = {
        ...state,
        auth: {
          status: 'FAILURE',
          err: action.err,
        },
      }
    
    default:
      return state;
  }
}