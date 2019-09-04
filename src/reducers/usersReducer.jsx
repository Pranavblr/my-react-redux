import {RECEIVE_GITHUB_USERS,REQUEST_GITHUB_USERS,FAILED_TO_FETCH,
    SET_DEFAULT_STATE,GET_USER_DETAILS,REQUEST_GITHUB_USER_DETAILS} from '../actions/types';

let initialState = {
    users : [],
    loading:false,
    user:{}
}
export default function usersReducer(state=initialState,action){
    switch(action.type){
        case REQUEST_GITHUB_USERS:
            return {
                ...state,
                loading:true
            }
         case RECEIVE_GITHUB_USERS:
             return {
                 ...state,
                 loading:false,
                 users:action.users
             }
             case FAILED_TO_FETCH:
                return {
                        ...state,
                        loading:false
                    }
             case SET_DEFAULT_STATE:
                 return {
                     ...state,
                     users:[],
                     loading:false,
                     user:{}
                 }
             case REQUEST_GITHUB_USER_DETAILS:
                 return {
                     ...state,
                     user:{}
                 }
            case GET_USER_DETAILS:
                return {
                    ...state,
                    user:action.user
                }

        default:
            return state;
    }
}