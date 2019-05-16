import { of, Observable,from } from "rxjs";
import { switchMap, map, catchError, } from 'rxjs/operators';
import { ofType, } from "redux-observable";
import { UserAction } from "../action/userData";
import Requests from "../../requests";
import Axios from "axios";

export default class Epic {

    static GetData = action$ => {
        return action$.pipe(
            ofType(UserAction.GET_DATA),            // LISTEN ACTION
            switchMap(({ payload }) => {            // Payload Data
                // log(payload);
                return from(Requests.axiosRequestFromEpic())    // API CALLING FUNC
                    .pipe(
                        map(response => {
                            console.log(response)       // 18 - HANDLING REPSONE
                           return {
                               type:UserAction.GET_DATA_SUCCESS,
                               payload:response.data
                           }
                        }),
                        catchError(err => {
                            console.log('auth err', err);
                            return of({
                                type: UserAction.GET_DATA_FAIL,
                                payload: err.message
                            });
                        })
                    )
                
            })
        );
    };

}