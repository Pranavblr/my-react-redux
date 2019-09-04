import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import usersReducer from './usersReducer'

export default combineReducers({
    loginReducer,
    blogReducer,
    errorReducer,
    usersReducer
})