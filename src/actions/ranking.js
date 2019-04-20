import * as types from './actionTypes';
import axios from 'axios';

export const getRankingWaiting = () => ({
  type: types.GET_RANKING_WAITING,
});

export const getRankingSuccess = (response) => ({
  type: types.GET_RANKING_SUCCESS,
  response,
});

export const getRankingFailure = (err) => ({
  type: types.GET_RANKING_FAILURE,
  err,
});

export const getRankingRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getRankingWaiting());
  return axios({
    url: '/api/members/rank?type=ACCOUNT', 
    method: 'post',
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getRankingSuccess(response));
  }).catch((err) => {
    dispatch(getRankingFailure(err));
  })
}