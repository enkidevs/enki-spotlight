import { GET_RESULTS } from '../actions/search';

export default function search(state = { }, action) {
  // debugger;
  if (action.type === GET_RESULTS) {
    debugger;
    state["enki_insights"] = action.payload.map(function(el) {
      let insight = {};
      insight["Title"] = el.headline;
      insight["Link"] = 'https://insights.enki.com/insight/' + el.id;
      return insight;
    });
  }

  console.log("The reducer from hell");
  console.log(state);

  return state;
}
