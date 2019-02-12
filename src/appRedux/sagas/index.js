import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import { receiveApi, errorApi } from '../actions/homeAction';
import fetchUser from '../services/fetchUser';

//worker saga: will be fired on REQUEST_HOME_SUCCESS action

function* getApiData(action){
    try{
        //Do api calls
        const data = yield call(fetchUser)
        yield put(receiveApi(data));
    }
    catch (err){
        yield put(errorApi(err));
    }
}

export default function* sagas() {
    yield takeLatest(types.RECEIVE_API_LOADING, getApiData)
}