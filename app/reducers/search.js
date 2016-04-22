import { GET_RESULTS } from '../actions/search';

export default function search(state = { }, action) {
  // debugger;
  if (action.type === GET_RESULTS) {
    return {
      ...state,
      enki_insights: action.payload.map((el, idx) => {
        const insight = {};
        insight.id = el.id;
        insight.Title = el.headline;
        insight.Link = 'http://10.5.19.203:3000/insight/' + el.id;
        return insight;
      }),
    };
  }
  return state;
}
