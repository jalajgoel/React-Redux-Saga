import * as types from '../types';

export const requestHome = () => ({type: types.REQUEST_HOME_SUCCESS})
export const receiveHome = (text) => ({type: types.RECEIVE_HOME_SUCCESS, text})