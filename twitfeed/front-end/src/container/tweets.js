import React from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router';

//actions
import { fetchTweets } from '../actions/tweets';

import { Link } from 'react-router-dom';

import Trends from './trends';

const imgStyle = {
	height: '50px',
	width: '50px'
}

class TweetsCon extends React.Component{
	render(){
		// console.log(this.props);
		const urlLink = '/user/';
		const { item } = this.props;
		// console.log(item);
		// const date;
		const date = item.created_at.split(' ');
		const comDate = `${date[1]} ${date[2]}, ${date[5]}`;
		// console.log(comDate);
		return (<div>
			<div className='userDet' id={item.user.id}>
			<img src={item.user.profile_image_url} alt={item.user.screen_name} style={imgStyle} /><span> </span>
			<Link to={urlLink+item.user.screen_name}>{item.user.name}</Link>
			</div>
			<div className='userTweet'>
			<h4>{item.text}</h4>
			</div>
			<div className='tweetDet'>
			<p>Replies: {item.reply_count}</p>
			<p>Likes: {item.favorite_count}</p>
			<p>Retweet: {item.retweet_count}</p>
			<p>Date: {comDate}</p>
			</div>
			<hr/>
			</div>);
		// return (<h4>tweet</h4>);
	}
}

class Tweets extends React.Component{
	componentWillMount(){
		const url = '/api/trends/';
		const param = this.props.match.params.tweet_name;
		const apiUrl = url+param;
		this.props.dispatch(fetchTweets(apiUrl));
	}
	controlTweets(){
		const { items } = this.props.tweets;
		const tItem = items.tweets;
		// console.log(tItem);
		if(String(tItem)==='undefined'){
			return console.log('Getting items')
		}
		else{
			let i = 0;
			// console.log('loaded');
			// console.log(tItem);
			return tItem.results.map((res)=>{
				i++;
				// console.log(res, i);
				if(i<=20){
					return (<TweetsCon key={i} item={res} />);
				}
			});
		}
	}
	// handleSort(e){
	// 	// const data = new FormData(e.target);
	// 	let d = new Date();
	// 	var myDate;
	// 	const sort = e.target.value;
	// 	if(sort==='latest'){
	// 		let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
	// 		// (sortedLwDate.getMonth()+1).toString()).length)
	// 		let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
	// 		let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
	// 		myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
	// 		// console.log(sortedLwDate.getDate())
	// 		console.log(myDate);
	// 	}
	// 	if(sort==='lWeek'){
	// 		let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-7);
	// 		// (sortedLwDate.getMonth()+1).toString()).length)
	// 		let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
	// 		let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
	// 		myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
	// 		// console.log(sortedLwDate.getDate())
	// 		console.log(myDate);
	// 	}
	// 	if(sort==='lMonth'){
	// 		let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-30);
	// 		// (sortedLwDate.getMonth()+1).toString()).length)
	// 		let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
	// 		let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
	// 		myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
	// 		// console.log(sortedLwDate.getDate())
	// 		console.log(myDate);
	// 	}
	// 	if(sort==='lYear'){
	// 		let sortedLwDate = new Date(d.getFullYear(), d.getMonth(), d.getDate()-365);
	// 		// (sortedLwDate.getMonth()+1).toString()).length)
	// 		let mChecker = ((sortedLwDate.getMonth()).toString()).length === 1 ? '0'+(sortedLwDate.getMonth()+1) : sortedLwDate.getMonth()+1;
	// 		let dChecker = ((sortedLwDate.getDate()).toString()).length === 1 ? '0'+sortedLwDate.getDate() : sortedLwDate.getDate();
	// 		myDate = sortedLwDate.getFullYear()+''+mChecker+''+dChecker+'0000';
	// 		// console.log(sortedLwDate.getDate())
	// 		console.log(myDate);
	// 	}
	// 	const url = '/api/trends/';
	// 	const param = this.props.match.params.tweet_name;
	// 	const apiUrl = url+param+'/'+myDate;
	// 	this.props.dispatch(fetchTweets(apiUrl));
	// }
	render(){
		const { tweets } = this.props;
		// const url = '/api/trends/';
		// console.log(tweets);
		const param = this.props.match.params.tweet_name;
		// console.log(tweets);
		console.log(this.props.login);
		// if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
		// 	return <Redirect to='/' />
		// }
		// else{	
			if(tweets.error!=null){
				return <div>Error: Please reload the page.</div>
			}
			else if(String(tweets.loading)==='true'){
				return <div>Loading...</div>;
			}
			else{
				// console.log(this.props.tweets.items.tweets['next'])
				// console.log(this.props.tweets.items.tweets);
				const checker = this.props.tweets.items.tweets;
				if(String(checker)==='undefined'){
					return <h3>Loading</h3>
				}
				else{
					// console.log(checker.next);
					const apiUrl = `/trends/${param}/${checker.next}`;
					// console.log(apiUrl);
					return (
						<div><Link to='/trends'>Back</Link>
						{/*<select onChange={this.handleSort.bind(this)}>
											<option value='latest'>Latest</option>
											<option value='lWeek'>Last Week</option>
											<option value='lMonth'>Last Month</option>
											<option value='lYear'>Last Year</option>
											</select>*/}
						<hr/><br/>{this.controlTweets()}<div><Link to={apiUrl}>View More</Link></div></div>);
				}
			}
		// }
	}
}

function mapStateToProps(state){
	return { tweets : state.tweets, login: state }; 
}

export default connect(mapStateToProps)(Tweets);