import {FAILED_TO_FETCH,RESET_ERROR} from '../actions/types';


let initialState ={
    error:''
}

export default function errorReducer(state=initialState, action){
   switch(action.type){
       case FAILED_TO_FETCH:
           return {
               ...state,
               error:action.error
           }
        case RESET_ERROR:
            return {
                ...state,
                error:''
            }

        default :
           return state;
   }
}