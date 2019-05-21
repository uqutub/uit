import { CounterAction } from '../action/counter';

const INITIAL_STATE = {
    count: 0,
    user: null
};

export function CounterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterAction.SET_USER:
            console.log('SET_USER reducer', action.payload);
            return Object.assign({}, state, { user: action.payload });

        case CounterAction.INCREMENT_COUNTER:
            console.log('INCREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count + 1 });
            // return {...state, count: state.count+1};

        case CounterAction.DECREMENT_COUNTER:
            console.log('DECREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count - 1 });
            
        default:
            return state;
    }
}