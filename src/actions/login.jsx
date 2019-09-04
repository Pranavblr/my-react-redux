import {UPDATE_CREDENTIALS} from './types';

export const updateCredentials=(data)=>{
    return {
        type:UPDATE_CREDENTIALS,
        payload:data
    }
}