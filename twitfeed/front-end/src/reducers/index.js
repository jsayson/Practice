import { combineReducers } from 'redux';
//forms
import { reducer as formReducer } from 'redux-form';
import trendsReducers from './trends.js';
import tweetsReducers from './tweets.js';
import tweetsNextReducers from './tweetsNext.js';
import userReducers from './user.js';
// import activeTrend from './activeTrend.js';
import userTweetsReducers from './userTweets.js';
import topUsersReducers from './topUsers.js';
import discoTweetsReducers from './discoverTweets.js'

import registerReducers from './register.js';
import loginReducers from './login.js';

const allReducers = combineReducers({
	trends: trendsReducers,
	tweets: tweetsReducers,
	tweetsNext: tweetsNextReducers,
	user: userReducers,
	userTweets: userTweetsReducers,
	topUsers: topUsersReducers,
	discoTweets: discoTweetsReducers,
	form: formReducer,
	register: registerReducers,
	login: loginReducers
});

// const 

export default allReducers;