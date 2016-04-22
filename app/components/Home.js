import React, { Component } from 'react';
import styles from './Home.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../actions/search';

const Home = React.createClass({
  propTypes: {
    getSearchResults: React.PropTypes.func.isRequired,
    enkiInsights: React.PropTypes.array
  },

  componentWillReceiveProps(newProps) {
    if (this.props.enkiInsights && this.props.enkiInsights.length !== newProps.enkiInsights.length) {
      console.log(newProps.enkiInsights);
    }
  },

  render() {
    const { getSearchResults, enkiInsights } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <h2>Enki Spotlight</h2>
          <input type="text" className={styles.ekspotlightsearch} name="ek-spotlight-search" placeholder="Search..."
            onChange={ this.handleSearchChange }/>
          <iframe style={{width: '480px', height: '640px'}}></iframe>
          <ul>
          {
            enkiInsights && enkiInsights.map((insight) => {
              return <li><span onClick={ () => this.openElectronWindow(insight.Link) }>{insight.Title}</span></li>
            })
          }
          </ul>
        </div>
      </div>
    );
  },

  handleSearchChange(e) {
    this.props.getSearchResults(e.target.value);
  },
  
  openElectronWindow(link) {
    console.log(link);
    
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    getSearchResults: state.getSearchResults,
    enkiInsights: state.search['enki_insights'],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
