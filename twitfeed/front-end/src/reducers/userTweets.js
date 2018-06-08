import {
	REQUEST_USER_TWEETS,
	RECEIVE_USER_TWEETS,
	ERROR_USER_TWEETS
} from '../actions/userTweets';

const initialState = {
	items: [],
	loading: false,
	error: null
}

function userTweetsReducers(state = initialState, action){
	switch(action.type){
		case REQUEST_USER_TWEETS:
			return { ...state, loading: true }
			break;
		case RECEIVE_USER_TWEETS:
			return { ...state, loading: false, items: action.payload }
			break;
		case ERROR_USER_TWEETS:
			return { ...state, loading: false, error: action.payload }
			break;
		default:
			return state; 
	}
	return state;
}

export default userTweetsReducers;