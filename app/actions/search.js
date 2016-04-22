import axios from 'axios';

export const API_ENDPOINT = 'http://insights-staging.enki.com/api/insights/live/0';
export const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NTQzNzM1MDYxY2EyOWVhMDAzYTBjMjMiLCJleHAiOjE0OTI4NTUzMTc2ODJ9.Tf0eIX-a7wHYTaCJUi5C4PAB-k6XjSEdgksGreFSYQY';

export function getSearchResults(term) {
    axios.get(API_ENDPOINT, {
            params: {
                'search': term,
                headers: {'x-access-token': TOKEN},
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
}