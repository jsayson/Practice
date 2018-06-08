import { 
	REQUEST_TRENDS,
	RECEIVE_TRENDS,
	ERROR_TRENDS
} from '../actions/trends';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function trendsReducers(state = initialState, action){
	switch(action.type){
		case REQUEST_TRENDS: 
			return { ...state, loading: true };
			break;
		case RECEIVE_TRENDS:
			return { ...state, loading: false, items: action.payload };
			break;
		case ERROR_TRENDS:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
	return state;
}

export default trendsReducers;