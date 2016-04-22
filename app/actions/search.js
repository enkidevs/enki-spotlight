import axios from 'axios';

export const API_ENDPOINT = 'http://insights-staging.enki.com/api/insights/live/0?all=true';
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NTQzNzM1MDYxY2EyOWVhMDAzYTBjMjMiLCJleHAiOjE0OTI4NTUzMTc2ODJ9.Tf0eIX-a7wHYTaCJUi5C4PAB-k6XjSEdgksGreFSYQY';

export const GET_RESULTS = 'GET_RESULTS';

export function getSearchResults(term) {

  // return {type: GET_RESULTS, payload: []};
  return (dispatch) => {
    axios.get(API_ENDPOINT,
      {
        params: {
          search: term,
          limited: true,
        },
        headers: { 'x-access-token': TOKEN },
      })
      .then(function (response) {
        dispatch({
          type: GET_RESULTS,
          payload: response.data.items,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
