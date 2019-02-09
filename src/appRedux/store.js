import { createStore, applyMiddleware } from 'redux';

import  createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//mount it on the store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

//run the saga
sagaMiddleware.run(sagas)

export default store;