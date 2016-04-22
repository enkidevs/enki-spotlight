import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);
