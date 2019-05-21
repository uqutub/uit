import { ItemsAction } from './itemsAction';

const INITIAL_STATE = {
    todos: ['item1 ']
};

export function ItemsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ItemsAction.ADD_ITEM:
            console.log('ADD_ITEM reducer', action.payload);
            return Object.assign({}, {todos: action.payload });
            
        default:
            return state;
    }
}