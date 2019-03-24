// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore } from 'redux';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

// reducers
import { CounterReducer } from './reducer/counter';

// Application Reducers
const rootReducer = combineReducers({
    CounterReducer: CounterReducer
});

export let store = createStore(rootReducer);