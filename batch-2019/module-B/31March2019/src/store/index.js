// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore,applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware, } from 'redux-observable';
// reducers
import { CounterReducer } from './reducer/counter';
import { TodoReducer } from './reducer/todo';
import { UserReducer } from './reducer/UserData';
//epic 
import UserEpic from './epic/userData'

const RootEpic = combineEpics(
    UserEpic.GetData
)

// Application Reducers
const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    TodoReducer,
    UserReducer
});
const epicMiddleware = createEpicMiddleware();
export let store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(RootEpic);