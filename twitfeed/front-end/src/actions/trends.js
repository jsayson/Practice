import fetch from 'cross-fetch';

export const REQUEST_TRENDS = 'REQUEST_TRENDS';
export const RECEIVE_TRENDS = 'RECEIVE_TRENDS';
export const ERROR_TRENDS = 'ERROR_TRENDS';

export const reqFetchTrends = () => ({
  type: REQUEST_TRENDS
});

export const recFetchTrends = trends => ({
  type: RECEIVE_TRENDS,
  payload: { trends }
});

export const fetchTrendsError = error => ({
  type: ERROR_TRENDS,
  payload: { error }
});

export function fetchTrends(){
	return dispatch => {
		dispatch(reqFetchTrends());
		return fetch('/api/trends',{
      method: 'GET',    
      credentials: 'include', 
      headers: { 'Content-Type' : 'application/json' }}).then(handleErrors).then(res=>res.json()).then(json=>{
			dispatch(recFetchTrends(json));
      return json;
		}).catch(error => dispatch(fetchTrendsError(error)))
	};
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}