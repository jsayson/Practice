import fetch from 'cross-fetch';

export const REQ_TOP_USERS = 'REQ_TOP_USERS';
export const REC_TOP_USERS = 'REC_TOP_USERS';
export const ERROR_TOP_USERS = 'ERROR_TOP_USERS';

export const reqTopUsers = () => ({
	type: REQ_TOP_USERS
});

export const recTopUsers = (users) => ({
	type: REC_TOP_USERS,
	payload: users
});

export const topUsersErrors = (error) => ({
	type: ERROR_TOP_USERS,
	payload: error
})

export function fetchTopUsers(url){
	return dispatch => {
		dispatch(reqTopUsers());
		return fetch(`/api/top_users/${url}`,{
			method: 'GET',		
			credentials: 'include',	
			headers: { 'Content-Type' : 'application/json' }}).then(handleError).then(res=>res.json()).then(json=>{dispatch(recTopUsers(json)); return json; }).catch((error)=>dispatch(topUsersErrors(error)));
	}
}

function handleError(response){
	if(!response.ok){
		throw Error(response.statusText);
	}
	return response;
}