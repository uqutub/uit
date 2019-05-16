// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore } from 'redux';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

// reducers
import { CounterReducer } from './reducer/counter';
import { TodoReducer } from './reducer/todo';

// Application Reducers
const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    TodoReducer
});

export let store = createStore(rootReducer);