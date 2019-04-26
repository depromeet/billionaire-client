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
  });
}

export const getAirPollutionWaiting = () => ({
  type: types.GET_AIR_POLLUTION_WAITING,
});

export const getAirPollutionSuccess = (response) => ({
  type: types.GET_AIR_POLLUTION_SUCCESS,
  response,
});

export const getAirPollutionFailure = (err) => ({
  type: types.GET_AIR_POLLUTION_FAILURE,
  err,
});

export const getAirPollutionRequest = () => (dispatch, getState) => {
  const state = getState();
  return new Promise((resolve, reject) => {
    dispatch(getAirPollutionWaiting());
    return axios({
      method: 'get',
      url: `/api/graphs/airpollution`,
      headers: {
        Authorization: `Bearer ${state.authReducer.auth.token}`,
      }
    }).then((response) => {
      dispatch(getAirPollutionSuccess(response));
      console.log('done-1');
      resolve();
    }).catch((err) => {
      dispatch(getAirPollutionFailure(err));
      reject();
    });
  });
}

export const getKakaotalkWaiting = () => ({
  type: types.GET_KAKAOTALK_WAITING,
});

export const getKakaotalkSuccess = (response) => ({
  type: types.GET_KAKAOTALK_SUCCESS,
  response,
});

export const getKakaotalkFailure = (err) => ({
  type: types.GET_KAKAOTALK_FAILURE,
  err,
});

export const getKakaotalkRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getKakaotalkWaiting());
  return axios({
    method: 'get',
    url: `/api/graphs/kakaotalk`,
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getKakaotalkSuccess(response));
  }).catch((err) => {
    dispatch(getKakaotalkFailure(err));
  })
}

export const getDpmSessionWaiting = () => ({
  type: types.GET_DPM_SESSION_WAITING,
});

export const getDpmSessionSuccess = (response) => ({
  type: types.GET_DPM_SESSION_SUCCESS,
  response,
});

export const getDpmSessionFailure = (err) => ({
  type: types.GET_DPM_SESSION_FAILURE,
  err,
});

export const getDpmSessionRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getDpmSessionWaiting());
  return axios({
    method: 'get',
    url: `/api/graphs/session`,
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getDpmSessionSuccess(response));
  }).catch((err) => {
    dispatch(getDpmSessionFailure(err));
  })
}