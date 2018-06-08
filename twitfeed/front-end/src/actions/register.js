import fetch from 'cross-fetch';

export const RES_REGISTER_ACCOUNT = 'RES_REGISTER_ACCOUNT';
export const REQ_REGISTER_ACCOUNT = 'REQ_REGISTER_ACCOUNT';

export const reqRegisterAccount = () => ({
	type: REQ_REGISTER_ACCOUNT
});

export const resRegisterAccount = (item) => ({
	type: RES_REGISTER_ACCOUNT,
	payload: item
});

export function fetchRegisterAccount(items){
	return dispatch => {
		dispatch(reqRegisterAccount()); 
	return fetch('/api/registerAcc', {
		method: 'POST',
		body: JSON.stringify(items),
		credentials: 'include',
		headers: { 'Content-Type' : 'application/json' }
	}).then(res=>res.json()).then(res=>dispatch(resRegisterAccount(res)));
	}
}

function handleError(response){
	if(!response.ok){
		throw Error(response.statusText);
	}
	return response;
}