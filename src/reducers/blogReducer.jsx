import {SELECT_COUNRTY,SELECT_CATEGORY,REQUEST_NEWS,RECEIVED_NEWS,FAILED_TO_FETCH
,SET_DEFAULT_STATE} from '../actions/types';


let initialState = {
    country:'',
    category:'',
    loading:false,
    news:[]
}

export default function blogReducer(state=initialState, action){
  switch(action.type){
      case SELECT_COUNRTY:
          return {
              ...state,
              country:action.country
          }
      case  SELECT_CATEGORY:
          return {
              ...state,
              category:action.category
          }
      case REQUEST_NEWS:
          return {
              ...state,
              loading:true  
          }
      case RECEIVED_NEWS:
          return {
              ...state,
              loading:false,
              news:action.news
          }
       case FAILED_TO_FETCH:
           return {
               ...state,
               loading:false
           }
       case SET_DEFAULT_STATE:
           return {
               ...state,
               country:'',
               category:'',
               loading:false,
               news:[]

           }
        default:
            return state
  }
}
