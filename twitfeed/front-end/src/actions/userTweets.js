import fetch from 'cross-fetch';

export const REQUEST_USER_TWEETS = 'REQUEST_USER_TWEETS';
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS';
export const ERROR_USER_TWEETS = 'ERROR_USER_TWEETS';

export const reqUserTweets = () => {
	type: REQUEST_USER_TWEETS
}

export const recUserTweets = (tweets) => ({
	type: RECEIVE_USER_TWEETS,
	payload: { tweets }
})

export const errorUserTweets = (error) => ({
	type: ERROR_USER_TWEETS,
	payload: { error }
})

export function fetchUserTweets(url){
	return dispatch => {
		dispatch(reqUserTweets());
		return fetch(url,{
			method: 'GET',		
			credentials: 'include',	
			headers: { 'Content-Type' : 'application/json' }}).then(handleErrors).then(res=>res.json()).then(json=>{
			dispatch(recUserTweets(json)); 
			return json;
		}).catch(error=>dispatch(errorUserTweets(error)))
	};
}

function handleErrors(response){
	if (!response.ok) {
 		throw Error(response.statusText);
  	}
  	return response;
}