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
  return axios.get('/api/instruments?expired=false', {
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


export const joinProductWaiting = () => ({
  type: types.JOIN_PRODUCT_WAITING,
});

export const joinProductSuccess = (response) => ({
  type: types.JOIN_PRODUCT_SUCCESS,
  response,
});

export const joinProductFailure = (err) => ({
  type: types.JOIN_PRODUCT_FAILURE,
  err,
});

export const joinProductRequest = (id) => (dispatch, getState) => {
  const state = getState();
  dispatch(joinProductWaiting());
  return axios({
    method: 'post',
    url: `/api/instruments/${id}/join`,
    data: {
      investment: 50,
    },
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(joinProductSuccess(response));
  }).catch((err) => {
    dispatch(joinProductFailure(err));
  })
}

