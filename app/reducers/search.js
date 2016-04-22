import { GET_RESULTS } from '../actions/search';

export default function search(state = { }, action) {
  // debugger;
  if (action.type === GET_RESULTS) {
    return {
      ...state,
      enki_insights: action.payload.map((el) => {
        const insight = {};
        insight.Title = el.headline;
        insight.Link = 'http://localhost:3000/insight/' + el.id;
        return insight;
      }),
    };
  }
  return state;
}
