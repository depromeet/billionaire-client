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

export const getAccountRequest = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(getAccountWaiting());
  return axios.get('/api/accounts', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then((response) => {
    dispatch(getAccountSuccess(response));
  }).catch((err) => {
    dispatch(getAccountFailure(err));
  })
}

export const getTransactionWaiting = () => ({
  type: types.GET_TRANSACTION_WAITING,
});

export const getTransactionSuccess = (response) => ({
  type: types.GET_TRANSACTION_SUCCESS,
  response,
});

export const getTransactionFailure = (err) => ({
  type: types.GET_TRANSACTION_FAILURE,
  err,
});

export const getTransactionRequest = (id) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(getAccountWaiting());
  return axios.get(`/api/accounts/${id}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then((response) => {
    dispatch(getTransactionSuccess(response));
  }).catch((err) => {
    dispatch(getTransactionFailure(err));
  })
}