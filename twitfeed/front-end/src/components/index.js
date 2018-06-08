import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//components 
import LoginForm from '../container/login';
import RegFormHolder from '../container/register';
import Trends from '../container/trends';
import Tweets from '../container/tweets';
import TopAccounts from '../container/topAccounts';
import User from '../container/user';
import TopUsers from '../container/topUsers';
import TweetsNext from '../container/tweetsNext';
import DiscoverTweets from '../container/discoverTweets';

//css


class App extends React.Component{
	render(){
		return (
			<Router>
			<div>
			<LoginForm />
			<Route exact path='/register' component={RegFormHolder} />
			<Route exact path='/popular' component={DiscoverTweets} />
			<Route exact path='/trends' component={Trends} />
			<Route exact path='/trends/:tweet_name' component={Tweets} />
			<Route exact path='/trends/:tweet_name/:next' component={TweetsNext} />
			<Route exact path='/top_users/:page' component={TopUsers} />
			<Route exact path='/user/:name' component={User} />
			</div>
			</Router>);
	}
}

export default App;