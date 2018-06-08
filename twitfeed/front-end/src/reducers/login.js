import { persistentReducer } from 'redux-pouchdb';
import { REQ_LOGIN, REC_LOGIN, REQ_LOGOUT } from '../actions/login';

const initialState = {
	item: [],
	loading: false,
}

function loginReducers(state = initialState, action){
	switch(action.type){
		case REQ_LOGIN: 
			return { ...state, loading: true };
			break;
		case REC_LOGIN:
			return { ...state, item: action.payload , loading: false}
		break;
		case REQ_LOGOUT:
			state = initialState;
			break;
		default:
		return state;
	}
	return state;
}

export default persistentReducer(loginReducers);