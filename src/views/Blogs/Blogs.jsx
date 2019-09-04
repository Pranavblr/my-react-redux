import React, {Component} from 'react';
import SearchField from './SearchField';
import {connect} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import NewsCard from './NewsCard';
import ErrorMessages from '../../components/ErrorMessages/ErrorMessages';
import {resetError} from '../../actions/error';

import PropTypes from 'prop-types';

class Blogs extends Component{
    componentDidMount(){
        this.props.resetError();
    }
    render(){
        return(
            <div className="blog-search">
                <div className="row">
                    {
                        this.props.loading?<h3><Loader/></h3>:null
                    }
                    <div className="col-md-12">
                        <SearchField/>
                        <NewsCard/>
                        <ErrorMessages error={this.props.error}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        loading:state.blogReducer.loading,
        error:state.errorReducer.error
    }
}
Blogs.propTypes ={
    loading:PropTypes.bool,
    error:PropTypes.string
}
Blogs.defaultProps={
    loading:false,
    error:''
}

export default connect(mapStateToProps,{resetError})(Blogs);