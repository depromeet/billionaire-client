import * as types from './actionTypes';
import axios from 'axios';

export const kakaoAuthorizeWaiting = () => ({
  type: types.KAKAO_AUTHORIZE_WAITING,
});

export const kakaoAuthorizeSuccess = (authObj) => ({
  type: types.KAKAO_AUTHORIZE_SUCCESS,
  authObj,
});

export const kakaoAuthorizeFailure = (err) => ({
  type: types.KAKAO_AUTHORIZE_FAILURE,
  err,
});

export const kakaoAuthorizeRequest = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(kakaoAuthorizeWaiting());
    window.Kakao.Auth.login({
      success: function (authObj) {
        dispatch(kakaoAuthorizeSuccess(authObj));
        resolve();
      },
      fail: function (err) {
        dispatch(kakaoAuthorizeFailure(err));
        reject();
      }
    });
  });
}

export const authWaiting = () => ({
  type: types.AUTH_WAITING,
});

export const authSuccess = (response) => {
  return {
    type: types.AUTH_SUCCESS,
    response,
  }
};

export const authFailure = (err) => ({
  type: types.AUTH_FAILURE,
  err,
});

export const authRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(authWaiting());
  return axios.post('/api/members/login', {
    token: state.authReducer.kakaoAuthorize.token,
  }).then((response) => {
    dispatch(authSuccess(response));
    dispatch(getMeRequest());
  }).catch((err) => {
    dispatch(authFailure(err));
  })
}

export const getMeWaiting = () => ({
  type: types.GET_ME_WAITING,
});

export const getMeSuccess = (response) => ({
  type: types.GET_ME_SUCCESS,
  response,
});

export const getMeFailure = (err) => ({
  type: types.GET_ME_FAILURE,
  err,
});

export const getMeRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getMeWaiting());
  return axios.get('/api/members/me', {
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(getMeSuccess(response));
    dispatch(attendRequest());
  }).catch((err) => {
    dispatch(getMeFailure(err));
  })
}

export const attendWaiting = () => ({
  type: types.ATTEND_WAITING,
});

export const attendSuccess = (response) => ({
  type: types.ATTEND_SUCCESS,
  response,
});

export const attendFailure = (err) => ({
  type: types.ATTEND_FAILURE,
  err,
});

export const attendRequest = () => (dispatch, getState) => {
  const state = getState();
  dispatch(attendWaiting());
  return axios({
    url: '/api/members/me/attend',
    method: 'post',
    headers: {
      Authorization: `Bearer ${state.authReducer.auth.token}`,
    }
  }).then((response) => {
    dispatch(attendSuccess(response));
  }).catch((err) => {
    dispatch(attendFailure(err));
  })
}