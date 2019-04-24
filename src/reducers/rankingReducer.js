import * as types from 'actions/actionTypes';

const initialState = {
  ranking: {
    status: null,
    data: null,
  }
};

export default function rankingReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }
  
  switch (action.type) {
    case types.GET_RANKING_WAITING:
      return state = {
        ...state,
        ranking: {
          ...state.ranking,
          status: 'WAITING',
        },
      }
    
    case types.GET_RANKING_SUCCESS:
      return state = {
        ...state,
        ranking: {
          status: 'SUCCESS',
          // data: {
          //   ...action.response.data,
          //   member: {
          //     ...action.response.data.member,
          //     cho: Hangul.disassemble(action.response.data.member.name, true)
          //   }
          // }
          data: action.response.data,
        }
      }

    case types.GET_RANKING_FAILURE:
      return state = {
        ...state,
        ranking: {
          status: 'FAILURE',
          err: action.err,
        },
      }

    default:
      return state;
  }
}