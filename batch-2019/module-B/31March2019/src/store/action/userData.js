// import { createAction } from 'redux-actions';

export class UserAction {

    static GET_DATA = 'GET_DATA';
    static GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
    static GET_DATA_FAIL = 'GET_DATA_FAIL';
    static NULL = 'NULL';

    static getUserData(payload) {
        return {
            type: UserAction.GET_DATA,
            payload
        }
    }

}