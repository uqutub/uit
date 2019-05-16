import {UserAction} from '../action/userData'


const INITIAL_STATE = {
    user:{},
};

export function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UserAction.GET_DATA:
            return {...state, isProcess: true}
        case UserAction.GET_DATA_SUCCESS:
            console.log("data of usser");
            return {...state, user: action.payload, isProcess: false}
        case UserAction.GET_DATA_FAIL:
        return {...state, error: action.payload, isProcess: false}
            
        default:
            return state;
    }
}