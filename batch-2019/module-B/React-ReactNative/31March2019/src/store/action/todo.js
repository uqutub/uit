// import { createAction } from 'redux-actions';

export class TodoAction {

    static ADD_TODO = 'ADD_TODO';
    static DELETE_TODO = 'DELETE_TODO';
    static DONE_TODO = 'DONE_TODO';
    static NULL = 'NULL';

    static addTodo(payload) {
        return {
            type: TodoAction.ADD_TODO,
            payload
        }
    }

    static deleteTodo() {
        console.log('increment action')
        return {
            type: TodoAction.DELETE_TODO,
            payload: null
        };
    }

    static doneTodo() {
        console.log('decrement action')
        return {
            type: TodoAction.DONE_TODO,
        };
    }


    // static dummy = createAction(
    //     CounterAction.NULL,
    //     payload => payload
    // );

}