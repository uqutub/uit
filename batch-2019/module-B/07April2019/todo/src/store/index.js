
import { combineReducers, createStore } from 'redux';

// reducers
import { ItemsReducer } from './itemsReducer';

// Application Reducers
const rootReducer = combineReducers({
    ItemsReducer: ItemsReducer
});

export let store = createStore(rootReducer);