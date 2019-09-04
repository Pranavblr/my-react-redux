import React, { Component } from "react";
import {getCountry,getCategory,fetchNews} from '../../actions/blogs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SearchField extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
        <label>Country</label>
          <select name="country" onChange={(event)=>this.props.getCountry(event.target.value)}>
            <option value="ind">India</option>
            <option value="us">USA</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div className="col-md-3">
        <label>Category</label>
          <select name="category" onChange={(event)=>this.props.getCategory(event.target.value)}>
            <option value="business">Business</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="col-md-3">
            <button onClick={()=>this.props.fetchNews(this.props.country, this.props.category)}>Get News</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state=>{
    return {
        country:state.blogReducer.country,
        category: state.blogReducer.category
    }
}
SearchField.propTypes ={
  country:PropTypes.string,
  category:PropTypes.string
}
SearchField.defaultProps={
  country:'',
  category:''
}

export default connect(mapStateToProps,
    {getCountry,getCategory,fetchNews}
    )(SearchField);
