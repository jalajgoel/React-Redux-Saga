import * as types from '../types';

export const requestApi = () => ({type: types.RECEIVE_API_LOADING})
export const receiveApi = (data) => ({type: types.RECEIVE_API_SUCCESS, data})
export const errorApi = (data) => ({type: types.RECEIVE_API_ERROR, data})