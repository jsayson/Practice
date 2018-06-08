import { REQ_REGISTER_ACCOUNT, RES_REGISTER_ACCOUNT } from '../actions/register';

const initialState = {
	item: [],
	loading: false
}

function registerReducers(state = initialState, action){
	switch(action.type){
		case REQ_REGISTER_ACCOUNT: 
		return { ...state, loading: true}
		case RES_REGISTER_ACCOUNT:
		// console.log(action.payload);
		return { ...state, loading: false, item: action.payload }
		break;
		default:
		return state;
	}
	return state;
}

export default registerReducers;