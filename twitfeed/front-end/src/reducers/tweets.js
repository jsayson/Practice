import { 
	REQUEST_TWEETS,
	RECEIVE_TWEETS,
	ERROR_TWEETS
} from '../actions/tweets';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function tweetsReducers(state = initialState, action){
	switch(action.type){
		case REQUEST_TWEETS: 
			return { ...state, loading: true };
			break;
		case RECEIVE_TWEETS:
			return { ...state, loading: false, items: action.payload };
			break;
		case ERROR_TWEETS:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
	return state;
}

export default tweetsReducers;