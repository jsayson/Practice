import fetch from 'cross-fetch';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const ERROR_TWEETS = 'ERROR_TWEETS';

export const reqFetchTweets = () => ({
  type: REQUEST_TWEETS
});

export const recFetchTweets = tweets => ({
  type: RECEIVE_TWEETS,
  payload: { tweets }
});

export const fetchTweetsError = error => ({
  type: ERROR_TWEETS,
  payload: { error }
});

export function fetchTweets(url){
	return dispatch => {
		dispatch(reqFetchTweets());
		return fetch(url,{
      method: 'GET',    
      credentials: 'include', 
      headers: { 'Content-Type' : 'application/json' }}).then(handleErrors).then(res=>res.json()).then(json=>{dispatch(recFetchTweets(json));
      return json;
		}).catch(error => dispatch(fetchTweetsError(error)))
	};
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}