import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';

const rootReducerFunc = (c, s) => {
  // debugger;
  return combineReducers({
    c,
    s,
  });
}
const rootReducer = rootReducerFunc(counter, search);

export default rootReducer;
