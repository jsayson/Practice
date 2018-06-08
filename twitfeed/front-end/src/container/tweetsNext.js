import React from 'react';
// import React from 'react';

//actions
import { fetchTweetsNext } from '../actions/tweetsNext.js';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

class TweetsNext extends React.Component{
	componentWillMount(){
		// console.log(this.props);
		const param1 = this.props.match.params.tweet_name;
		const param2 = this.props.match.params.next;
		this.props.dispatch(fetchTweetsNext(param1, param2));
	}
	render(){
		// const tName = this.props.match.params.tweet_name;
		// const pNext = this.props.match.params.next;
		// console.log(pNext);
		const param1 = this.props.match.params.tweet_name;
		// const param2 = this.props.match.params.next;
		// console.log(this.props.tweetsNext);
		// console.log(this.props);
		const { tweetsNext } = this.props;
		const accUrl = '/user/';
		if(Array.isArray(this.props.login.item)===true || this.props.login.item===undefined){
			return <Redirect to='/' />
		}
		// console.log(this.props.tweetsNext.items[0]);
		else{	
		if(tweetsNext.error!=null){
			return <div>Error: Please reload the page.</div>
		}
		else if(String(tweetsNext.loading)==='true'){
			return <div>Loading...</div>;
		}
		else{
			if(String(this.props.tweetsNext.items[0])==='undefined'){
				return <h4>Still Loading</h4>;
			}
			else{
				// const next = this.props.tweetsNext.items.tweets.next;
				// console.log(this.props.tweetsNext.items)
				// const x = 0;
				// console.log(this.props.tweetsNext.items[x]);
				var x = 0;
				// console.log(this.props.tweetsNext.items[x]);
				const next = this.props.tweetsNext.items[x].next;
				console.log(this.props.tweetsNext.items.length);
				console.log(x);
				return (<div>
				{
					this.props.tweetsNext.items.map((item, index)=>{
							x++;
							return (<div key={index}>
								{
									this.props.tweetsNext.items[index].results.map((item1, index1)=>{
										// console.log(item1);
										return (<div key={index1}><img src={item1.user.profile_image_url} alt='img'/><Link to={accUrl+item1.user.screen_name}>{item1.user.name}</Link><div>{item1.text}</div><div><h5>Likes: {item1.favorite_count} || Retweets: {item1.retweet_count} || Replies: {item1.reply_count}</h5></div>{item1.created_at}<hr/></div>)
									})
								}
								</div>)
					})
				}
					<div><button onClick={()=>this.props.dispatch(fetchTweetsNext(param1, next)) }>View more</button></div></div>)
			}
		}
		}
	}
}

function mapStateToProps(state){
	return { tweetsNext: state.tweetsNext, login: state.login };
}

export default connect(mapStateToProps)(TweetsNext);