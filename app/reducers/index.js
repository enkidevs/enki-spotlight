import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import search from './search';

const rootReducer = combineReducers({
  counter,
  search,
  routing
});

export default rootReducer;
