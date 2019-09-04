import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCredentials} from '../../actions/login';

class Login extends Component{
    loginHandler = ()=>{
        this.props.history.push('/dashboard');
    }
    handleInputChange(e){
        let Inputdata = {
            key:e.target.name,
            value:e.target.value
        };
       this.props.updateCredentials(Inputdata);
    }
    render(){
        return(
            <div className="container">
                <h3>Login Page Component</h3>
                 <div className="row">
                     <div className="col-md-12">
                         <input onChange={(event)=>this.handleInputChange(event)} type="text" placeholder="username" name="username"/>
                     </div>
                     <div className="col-md-12">
                         <input onChange={(event)=>this.handleInputChange(event)} type="text" placeholder="password" name="password"/>
                      </div>
                     
                 </div>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return state
}
export default connect(mapStateToProps,{updateCredentials})(Login);