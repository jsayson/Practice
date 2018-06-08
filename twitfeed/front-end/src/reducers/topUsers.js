import { REQ_TOP_USERS, REC_TOP_USERS, ERROR_TOP_USERS } from '../actions/topUsers';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function topUsersReducers(state = initialState, action){
	switch(action.type){
		case REQ_TOP_USERS: 
			return { ...state, loading: true };
			break;
		case REC_TOP_USERS:
			return { ...state, loading: false, items: action.payload };
			break;
		case ERROR_TOP_USERS:
			return { ...state, loading: false, error: action.payload };
			break;
	}
	return state;
}

export default topUsersReducers;