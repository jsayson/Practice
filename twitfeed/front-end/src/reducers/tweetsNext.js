import { 
	REQUEST_TWEETS_NEXT,
	RECEIVE_TWEETS_NEXT,
	ERROR_TWEETS_NEXT
} from '../actions/tweetsNext';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function tweetsNextReducers(state = initialState, action){
	switch(action.type){
		case REQUEST_TWEETS_NEXT: 
			return { ...state, loading: true };
			break;
		case RECEIVE_TWEETS_NEXT:
			return { ...state, loading: false, items: state.items.concat(action.payload) };
			break;
		case ERROR_TWEETS_NEXT:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
	return state;
}

export default tweetsNextReducers;