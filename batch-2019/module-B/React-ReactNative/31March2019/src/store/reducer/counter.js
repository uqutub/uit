import { CounterAction } from '../action/counter';

const INITIAL_STATE = {
    count: 0,
    user: null,
    isProcess: false
};

export function CounterReducer(state = INITIAL_STATE, action) {
    console.log('COUNTER REDUCER PURE FUCNTION')
    switch (action.type) {
        case CounterAction.SET_USER:
            console.log('SET_USER reducer', action.payload);
            return {...state, user: action.payload};
            // return Object.assign({}, state, { user: action.payload });
        
        case CounterAction.LOGIN:
            return { ...state, isProcess: true };

        case CounterAction.INCREMENT_COUNTER:
            console.log('INCREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count + 1, isProcess: false });
            // return {...state, count: state.count+1};

        case CounterAction.DECREMENT_COUNTER:
            console.log('DECREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count - 1 });
            
        default:
            return state;
    }
}