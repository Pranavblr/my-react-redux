import {UPDATE_CREDENTIALS,SET_DEFAULT_STATE} from '../actions/types';

let initialState ={
    username:'',
    password:'',
}
export default function updateCredentials(state=initialState, action){
     switch(action.type){
          case  UPDATE_CREDENTIALS:
               if(action.payload.key==='username'){
                return {
                    ...state,
                    username:action.payload.value,
                }
               } else if(action.payload.key ==='password') {
                return {
                    ...state,
                    password:action.payload.value
                }
               }
           break;
          case SET_DEFAULT_STATE:
              return {
                  ...state,
                  username:'',
                  password:'',
              }
           default:
              return state;
     }     
}