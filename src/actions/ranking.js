import * as types from './actionTypes';
import axios from 'axios';
import Hangul from 'hangul-js';

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

export const getRankingRequest = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(getRankingWaiting());
  return axios({
    url: '/api/members/rank?type=ACCOUNT', 
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then((response) => {
    const data = response.data.map((item) => {
      const disassembled = Hangul.disassemble(item.member.name, true)
      const choseong = disassembled.reduce((acc, el) => {
        el = el[0] ? el[0] : el;
        return acc + el;
      }, '');

      return {
        ...item,
        member: {
          ...item.member,
          cho: choseong
      }
    }});
    
    const result = {
      ...response,
      data,
    }
    dispatch(getRankingSuccess(result));
  }).catch((err) => {
    dispatch(getRankingFailure(err));
  })
}