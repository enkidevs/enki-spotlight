import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/search';

const Home = React.createClass({
  propTypes: {
    getSearchResults: React.PropTypes.func.isRequired
  },

  render() {
    const { getSearchResults } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <h2>Enki Spotlight</h2>
          <input type="text" className={styles.ekspotlightsearch} name="ek-spotlight-search" placeholder="Search..."
            onChange={ this.handleSearchChange }/>
        </div>
      </div>
    );
  },

  handleSearchChange(e) {
    this.props.getSearchResults(e.target.value);
  }
});

function mapStateToProps(state) {
  return {
    getSearchResults: state.getSearchResults
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
