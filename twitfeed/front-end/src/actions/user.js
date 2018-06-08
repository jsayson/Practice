import fetch from 'cross-fetch';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ERROR_USER = 'ERROR_USER';

export const reqFetchUser = () => ({
  type: REQUEST_USER
});

export const recFetchUser = user => ({
  type: RECEIVE_USER,
  payload: { user }
});

export const fetchUserError = error => ({
  type: ERROR_USER,
  payload: { error }
});

export function fetchUser(name){
	return dispatch => {
		dispatch(reqFetchUser());
		return fetch(name,{
      method: 'GET',    
      credentials: 'include', 
      headers: { 'Content-Type' : 'application/json' }}).then(handleErrors).then(res=>res.json()).then(json=>{dispatch(recFetchUser(json));
			return json;
		}).catch(error => dispatch(fetchUserError(error)))
	};
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}