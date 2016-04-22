import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


const Home = React.createClass({
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Enki Spotlight</h2>
          <input type="text" className={styles.ekspotlightsearch} name="ek-spotlight-search" placeholder="Search..."
            onChange={this.handleChange}/>
        </div>
      </div>
    );
  },

  handleChange(e) {
    console.log(e.target.value);

  },
});

module.exports = Home;
