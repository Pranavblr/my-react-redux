import React, {Component} from 'react';
import {fetchUserDetails} from '../../actions/users';
import {resetError} from '../../actions/error';
import {connect} from 'react-redux';
import ErrorMessages from '../../components/ErrorMessages/ErrorMessages';

import PropTypes from 'prop-types';


class UserProfile extends Component {
    componentDidMount(){
        this.props.resetError();
        if(this.props.match&&this.props.match.params&&this.props.match.params.username){
            let userName = this.props.match.params.username;
            this.props.fetchUserDetails(userName);
        }
       console.log(this.props.match.params.username)
    }
    render(){
        return(
            <div>
                {
                    this.props.error? <ErrorMessages error={this.props.error}/>:null
                }
               
                <p>{this.props.userdetails.login}</p>
            </div>
        )
    }
}
const mapStateToProps = state =>{
return {
    userdetails:state.usersReducer.user,
    error:state.errorReducer.error
 }
}
UserProfile.propTypes={
    userdetails:PropTypes.object
}
UserProfile.defaultProps={
    userdetails:{}
}
export default connect(mapStateToProps,{fetchUserDetails,resetError})(UserProfile);