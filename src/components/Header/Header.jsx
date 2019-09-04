/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="col-md-3">
            <a href="https://github.com/reduxjs/redux" target="_blank">GitHub</a>
        </div>
        <div className="col-md-3 offset-6">
          {this.props.username && this.props.username
            ? this.props.username
            : ""}
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    username: state.loginReducer.username
  };
};
Header.propTypes ={
  username:PropTypes.string
}
Header.defaultProps ={
  username:''
}
export default connect(mapStateToprops)(Header);
