import {SELECT_COUNRTY,SELECT_CATEGORY,REQUEST_NEWS,RECEIVED_NEWS,FAILED_TO_FETCH} from './types';
import axios from 'axios';

const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export const getCountry = country =>{
    return {
        type:SELECT_COUNRTY,
        country
    }
}
export const getCategory = category =>{
    return {
        type:SELECT_CATEGORY,
        category
    }
}
export const requestNews = () =>({
       type:REQUEST_NEWS,
});
export const recievedNews =news =>{
   return {
       type:RECEIVED_NEWS,
       news
    }
}
export const fetchNews = (country,category)=>{
    let getNewsUrl = `https://newsapi.org/v2/top-headlines? 
    country=${country}&category=${category}&apiKey=${MY_API_KEY}`;
    return (dispatch)=>{
        dispatch(requestNews());
        return axios.get(getNewsUrl)
        .then(response=>{
            dispatch(recievedNews(response.data))
        })
        .catch(error=>{
            if(error&&error['response']&&error['response']['data']&&error['response']['data'].message){
               let errorMessage = error['response']['data'].message;
                dispatch({
                    type:FAILED_TO_FETCH,error:errorMessage
                });
            }else{
                throw(error);
            }
        })
    }
}
