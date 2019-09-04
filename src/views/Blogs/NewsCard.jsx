/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class NewsCard extends Component{
    render(){
        return(
            <div className="news-card row">
             { this.props.articles&&this.props.articles.length>0?
                 this.props.articles.map((prop,key)=>(
                     <div key={key} className="col-md-4 col-4">
                       <h5>{prop.source.name}</h5>
                       <img className="card-image" src={prop.urlToImage} />
                     </div>
                   )):null
             }
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        articles :state.blogReducer.news.articles
    }
}
NewsCard.propTypes ={
    articles:PropTypes.array
}
NewsCard.defaultProps ={
    articles:[]
}
export default connect(mapStateToProps)(NewsCard);