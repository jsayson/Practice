import fetch  from 'cross-fetch';

export const REQ_DISCO_TWEETS = 'REQ_DISCO_TWEETS';
export const REC_DISCO_TWEETS = 'REC_DISCO_TWEETS';
export const ERROR_DISCO_TWEETS = 'ERROR_DISCO_TWEETS';

export const reqDiscoTweets = () => ({
	type: REQ_DISCO_TWEETS
});

export const recDiscoTweets = (discoTweets) => ({
	type: REC_DISCO_TWEETS,
	payload: { discoTweets }
});

export const errorDiscoTweets = (error) => ({
	type: ERROR_DISCO_TWEETS,
	payload: { error }
});

export function fetchDiscoTweets(item){
	return dispatch => {
		dispatch(reqDiscoTweets());
		return fetch('/api/popular',{
			method: 'POST',	
			body: JSON.stringify(item), 	
			credentials: 'include',	
			headers: { 'Content-Type' : 'application/json' }}).then(handleError).then(res=>res.json()).then(json=>{dispatch(recDiscoTweets(json)); return json; }).catch((error)=>dispatch(errorDiscoTweets(error)));
	}
}

function handleError(response){
	if(!response.ok){
		throw Error(response.statusText);
	}
	return response;
}