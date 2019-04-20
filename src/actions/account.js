import * as types from './actionTypes';
import axios from 'axios';

export const getAccountWaiting = () => ({
  type: types.GET_ACCOUNT_WAITING,
});

export const getAccountSuccess = (response) => ({
  type: types.GET_ACCOUNT_SUCCESS,
  response,
});

export const getAccountFailure = (err) => ({
  type: types.GET_ACCOUNT_FAILURE,
  err,
});

export const getAccountRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getAccountWaiting());
  return axios.get('/api/accounts', {
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getAccountSuccess(response));
  }).catch((err) => {
    dispatch(getAccountFailure(err));
  })
}