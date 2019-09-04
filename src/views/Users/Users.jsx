import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGithubUsers} from '../../actions/users';
import UserList from './UserList';
import ErrorMessages from '../../components/ErrorMessages/ErrorMessages';
import Loading from '../../components/Loader/Loader';

import PropTypes from 'prop-types';

class Users extends Component{
    componentDidMount(){
     this.props.fetchGithubUsers();
    }
    render(){
        return(
            <div className="useres">
                {
                    this.props.loading?<Loading/>:null
                }
                {
                    this.props.userList&&this.props.userList.length>0?
                    this.props.userList.map((user,key)=>(
                      <UserList user={user} key={key}/>  
                    )):null
                    
                }
                {
                    this.props.error?<ErrorMessages error={this.props.error}/>:null
                }
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        userList:state.usersReducer.users,
        loading:state.usersReducer.loading,
        error:state.errorReducer.error
    }
}
Users.propTypes ={
    userList:PropTypes.array,
    loading:PropTypes.bool,
    error:PropTypes.string
}
Users.defaultProps ={
    userList:[],
    loading:false,
    error:''
}
export default connect(mapStateToProps,
    {fetchGithubUsers})(Users);