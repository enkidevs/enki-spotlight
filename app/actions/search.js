import axios from 'axios';

export const API_ENDPOINT = 'http://10.5.19.203:3000/api/insights/live/0?all=true';
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NzE5ZjRjNjE0ZTBkOGIyMjJhNzRhYjQiLCJleHAiOjE0ODMyMjg4MDAwMDB9.Eq4vJITcun_8wRCKACQKnjxCKLB293lyafgulHU4eeI';

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
    return {
      type: GET_RESULTS,
      ready: false,
    };
  };
}
