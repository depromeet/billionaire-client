import * as types from './actionTypes';
import axios from 'axios';

export const getProductWaiting = () => ({
  type: types.GET_PRODUCT_WAITING,
});

export const getProductSuccess = (response) => ({
  type: types.GET_PRODUCT_SUCCESS,
  response,
});

export const getProductFailure = (err) => ({
  type: types.GET_PRODUCT_FAILURE,
  err,
});

export const getProductRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getProductWaiting());
  return axios.get('/api/instruments', {
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getProductSuccess(response));
  }).catch((err) => {
    dispatch(getProductFailure(err));
  })
}


export const getProductDetailWaiting = () => ({
  type: types.GET_PRODUCT_DETAIL_WAITING,
});

export const getProductDetailSuccess = (response) => ({
  type: types.GET_PRODUCT_DETAIL_SUCCESS,
  response,
});

export const getProductDetailFailure = (err) => ({
  type: types.GET_PRODUCT_DETAIL_FAILURE,
  err,
});

export const getProductDetailRequest = (id) => (dispatch, getState) => {
  const state = getState();
  dispatch(getProductDetailWaiting());
  return axios.get(`/api/instruments/${id}`, {
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getProductDetailSuccess(response));
  }).catch((err) => {
    dispatch(getProductDetailFailure(err));
  })
}