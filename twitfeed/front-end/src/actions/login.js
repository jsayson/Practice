import fetch from 'cross-fetch';

export const REQ_LOGIN = 'REQ_LOGIN';
export const REC_LOGIN = 'REC_LOGIN';

export const REQ_LOGOUT = 'REQ_LOGOUT'

export const reqLogin = () => ({
	type: REQ_LOGIN
})
export const recLogin = (item) => ({
	type: REC_LOGIN,
	payload: item
});

export const reqLogout = () => ({
	type: REQ_LOGOUT,
})

export function fetchRecLogin(items){
	// const sample = {email: 'sample@email.com'};
	return dispatch => {
		dispatch(reqLogin());
		return fetch('/api/loginAcc', {
		method: 'POST',
		body: JSON.stringify(items),
		credentials: 'include',
		headers: { 'Content-Type' : 'application/json' }
	}).then(res=>res.json()).then(res=>{console.log(res);dispatch(recLogin(res)); return res;});
	}
}

export function fetchReqLogout(items){
	return dispatch => (dispatch(reqLogout()));
}