import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class UserList extends Component{
   render(){
       return(
           <div>
             <li>
             <Link to={`/dashboard/user/${this.props.user.login}`}>{this.props.user.login}
             </Link></li>
            </div>
       )
   }
}
export default UserList;