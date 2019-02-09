import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import { receiveHome } from '../actions/homeAction';

//worker saga: will be fired on REQUEST_HOME_SUCCESS action

function* helloWorld(action){
    try{
        //Do api calls
        yield put(receiveHome('Hello World From Saga!'));
    }
    catch (err){
        yield put(receiveHome('ERROR From Saga!'));
    }
}

export default function* sagas() {
    yield takeLatest(types.REQUEST_HOME_SUCCESS, helloWorld)
}