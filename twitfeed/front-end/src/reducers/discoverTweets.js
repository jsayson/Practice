import { 
	REQ_DISCO_TWEETS,
	REC_DISCO_TWEETS,
	ERROR_DISCO_TWEETS
} from '../actions/discoverTweets';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function discoTweetsReducers(state = initialState, action){
	switch(action.type){
		case REQ_DISCO_TWEETS: 
			return { ...state, loading: true };
			break;
		case REC_DISCO_TWEETS:
			return { ...state, loading: false, items: action.payload };
			break;
		case ERROR_DISCO_TWEETS:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
	return state;
}

export default discoTweetsReducers;