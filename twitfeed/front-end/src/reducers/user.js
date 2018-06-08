import { 
	REQUEST_USER,
	RECEIVE_USER,
	ERROR_USER
} from '../actions/user';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function userReducers(state = initialState, action){
	switch(action.type){
		case REQUEST_USER: 
			return { ...state, loading: true };
			break;
		case RECEIVE_USER:
			return { ...state, loading: false, items: action.payload };
			break;
		case ERROR_USER:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
	return state;
}

export default userReducers;