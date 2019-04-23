import * as types from 'actions/actionTypes';

const initialState = {
  kakaoAuthorize: {
    status: null,
    token: null,
  },
  auth: {
    status: null,
    response: null,
    token: null,
  },
  me: {
    status: null,
    data: null,
  },
  attend: {
    status: null,
    data: null,
  }
};

export default function authReducer(state, action) {
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
          err: action.err,
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
          token: action.response.data.response.token,
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

    case types.GET_ME_WAITING:
      return state = {
        ...state,
        me: {
          ...state.me,
          status: 'WAITING',
        },
      }
      
    case types.GET_ME_SUCCESS:
      return state = {
        ...state,
        me: {
          status: 'SUCCESS',
          data: action.response.data.response,
        },
      }

    case types.GET_ME_FAILURE:
      return state = {
        ...state,
        me: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    case types.ATTEND_WAITING:
      return state = {
        ...state,
        attend: {
          status: 'WAITING',
        },
      }
      
    case types.ATTEND_SUCCESS:
      return state = {
        ...state,
        attend: {
          status: 'SUCCESS',
          data: action.response,
        },
      }

    case types.ATTEND_FAILURE:
      return state = {
        ...state,
        attend: {
          status: 'FAILURE',
          err: action.err,
        },
      }
    
    default:
      return state;
  }
}