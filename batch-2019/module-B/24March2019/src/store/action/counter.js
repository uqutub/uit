// import { createAction } from 'redux-actions';

export class CounterAction {

    static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER = 'DECREMENT_COUNTER';
    static SET_USER = 'SET_USER';
    static NULL = 'NULL';

    static setMyUser(payload) {
        return {
            type: CounterAction.SET_USER,
            payload
        }
    }

    static increment() {
        console.log('increment action')
        return {
            type: CounterAction.INCREMENT_COUNTER,
            payload: null
        };
    }

    static decrement() {
        console.log('decrement action')
        return {
            type: CounterAction.DECREMENT_COUNTER,
        };
    }


    // static dummy = createAction(
    //     CounterAction.NULL,
    //     payload => payload
    // );

}