import React,{Component} from 'react';

class ErrorMessages extends Component{
   render(){
       return(
           <div className="row">
               <p>{this.props.error}</p>
           </div>
       )
   }
}


export default ErrorMessages;