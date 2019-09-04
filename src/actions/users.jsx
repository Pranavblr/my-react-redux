import {RECEIVE_GITHUB_USERS,REQUEST_GITHUB_USERS,FAILED_TO_FETCH,GET_USER_DETAILS,
  REQUEST_GITHUB_USER_DETAILS} from "./types";
import axios from "axios";

export const requestGithubUsers = () => {
  return {
    type: REQUEST_GITHUB_USERS
  };
};
export const reciveGithubUsers = users => {
  return {
    type: RECEIVE_GITHUB_USERS,
    users
  };
};

export const requestUserDetails = ()=>{
   return{
     type:REQUEST_GITHUB_USER_DETAILS
   }
}

export const recieveUserDetails = user =>{
  return {
    type:GET_USER_DETAILS,
    user
  }
}

export const fetchGithubUsers = () => {
  let userListUrl = "https://api.github.com/users";
  return dispatch => {
    dispatch(requestGithubUsers());
    dispatch({ type: FAILED_TO_FETCH, error: '' });
    return axios
      .get(userListUrl)
      .then(response => {
        dispatch(reciveGithubUsers(response.data));
      })
      .catch(error => {
        if (error && error.message) {
          dispatch({ type: FAILED_TO_FETCH, error: error.message });
        } else {
          throw error;
        }
      });
  };
};
export const fetchUserDetails = (username)=>{
  let userDetailsUrl = `https://api.github.com/users/${username}`;
  return dispatch=>{
    dispatch({type:REQUEST_GITHUB_USER_DETAILS})
    return axios.get(userDetailsUrl)
    .then(response=>{
      dispatch(recieveUserDetails(response.data));
    })
    .catch(error=>{
      if(error&&error.message){
        dispatch({ type: FAILED_TO_FETCH, error: error.message });
      }
    })
  }
}
