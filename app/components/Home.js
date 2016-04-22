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

  getInitialState() {
    return {
      selectedInsight: {},
    };
  },

  handleSearchChange(e) {
    this.props.getSearchResults(e.target.value);
  },

  handleSelectInsight(insight) {
    console.log(insight);
    this.setState({
      selectedInsight: insight,
    });
  },

  render() {
    const { getSearchResults, enkiInsights } = this.props;
    const { selectedInsight } = this.state;
    return (
        <div className="main-wrapper">
          <div className="search-wrapper">
            <h2>Enki Spotlight</h2>
            <input type="text" className={styles.ekspotlightsearch}
              name="ek-spotlight-search" placeholder="Search..."
              onChange={ this.handleSearchChange } />
            <ul>
            {
              enkiInsights && enkiInsights.map((insight) => {
                return (<li>
                  <span
                    className={'insight-link' +
                      (selectedInsight &&
                      selectedInsight.id === insight.id ?
                      ' selected-insight' : '')}
                    onClick={ () => this.handleSelectInsight(insight) }>
                    {insight.Title}
                  </span>
                </li>);
              })
            }
          </ul>
        </div>
        {selectedInsight.Link && <iframe src={selectedInsight.Link} />}
        </div>
    );
  },
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
