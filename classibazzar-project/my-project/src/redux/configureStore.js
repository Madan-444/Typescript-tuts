import {createStore,applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable'

import {pingEpic} from './action'
import myReducer from './myReducer'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    myReducer,
    applyMiddleware(epicMiddleware));

    epicMiddleware.run(pingEpic)

export default store;