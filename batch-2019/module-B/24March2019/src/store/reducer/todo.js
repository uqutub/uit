import { TodoAction } from '../action/todo';

const INITIAL_STATE = {
    todos: [],
};

export function TodoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TodoAction.ADD_TODO:
            console.log('SET_USER reducer', action.payload);
            var abc = [...state.todos];
            abc.push(abc.length);
            return Object.assign({}, state, { todos: abc });

        case TodoAction.DELETE_TODO:
            console.log('INCREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count + 1 });
            // return {...state, count: state.count+1};

        case TodoAction.DONE_TODO:
            console.log('DECREMENT_COUNTER reducer', action.payload);
            return Object.assign({}, state, { count: state.count - 1 });
            
        default:
            return state;
    }
}