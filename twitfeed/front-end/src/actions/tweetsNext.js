import fetch from 'cross-fetch';

export const REQUEST_TWEETS_NEXT = 'REQUEST_TWEETS_NEXT';
export const RECEIVE_TWEETS_NEXT = 'RECEIVE_TWEETS_NEXT';
export const ERROR_TWEETS_NEXT = 'ERROR_TWEETS_NEXT';

export const reqFetchTweetsNext = () => ({
  type: REQUEST_TWEETS_NEXT
});

export const recFetchTweetsNext = tweets => ({
  type: RECEIVE_TWEETS_NEXT,
  payload: [ tweets ]
});

export const fetchTweetsNextError = error => ({
  type: ERROR_TWEETS_NEXT,
  payload: { error }
});

export function fetchTweetsNext(url, next){
  const urlApi = `/api/trends/${url}/${next}`;
	return dispatch => {
		dispatch(reqFetchTweetsNext());
		return fetch(urlApi).then(handleErrors).then(res=>res.json()).then(json=>{dispatch(recFetchTweetsNext(json));
      return json;
		}).catch(error => dispatch(fetchTweetsNextError(error)))
	};
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}