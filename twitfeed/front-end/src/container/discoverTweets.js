import React from 'react';

import { connect } from 'react-redux';

//actions
import { fetchDiscoTweets } from '../actions/discoverTweets';

import { Field, reduxForm } from 'redux-form';

import { Redirect } from 'react-router'; 

import { Link } from 'react-router-dom';

let SearchEn = props => {
	const { handleSubmit } = props;
	return (<form onSubmit={handleSubmit}>
		<label>Search: </label>
		<Field component='input' type='search' name='search' placeholder='Search Popular Tweets' /><br/>
		<label>Sort by: </label>
		<Field name='sort' component='select'>
		<option value='latest'>Latest</option>
		<option value='lweek'>Last Week</option>
		<option value='lmonth'>Last Month</option>
		<option value='lyear'>Last Year</option>
		</Field><button type='submit'>Submit</button>
		</form>);
}

SearchEn = reduxForm({
	form: 'search'
})(SearchEn);

// class Results extends React.Component{
// 	render(){
// 		// return (<div>{this.props.items.discoTweets.results.map((item)=>{
// 		// 	return <div><hr/><h1>Hello World</h1></div>
// 		// }) }</div>);
// 		// console.log(this.props.items)
// 		// this.props.items.discoTweets.results.forEach((res)=>{
// 		// 	console.log(res);
// 		// });
// 		// console.log(this.props.items)
// 		console.log(this.props.items);
// 		return <h3>Hello World</h3>
// 	}
// }

class DiscoverTweets extends React.Component{
	submit = values => {
		var items;
		if(values.sort===undefined && values.search!==undefined){
			items = {search: values.search, sort: 'latest'}
		}
		if(values.search===undefined && values.sort!==undefined){
			items = {search: 'news', sort: values.sort}
		}
		if(values.sort===undefined && values.search===undefined){
			items = {search: 'news', sort: 'latest' }
		}
		if(values.sort!==undefined && values.search!==undefined){
			items = values;
		}
		// console.log(values);
		// console.log(item);
		this.props.dispatch(fetchDiscoTweets(items));
	}
	componentDidMount(){
    window.addEventListener('scroll', ()=>{
    	console.log(this.target);
    	console.log(document.documentElement.scrollTop);
    });
	}
	componentWillUpdate(){
		// console.log(this.props.discoTweets);
	}
	showPop(){
		console.log(this.props.discoTweets);
		const userUrl = '/user/';
		return this.props.discoTweets.items.discoTweets.results.map((item, index)=>{
			console.log(item);
			const date = item.created_at.split(' ');
			return (<div key={index}>
				<div><img src={item.user.profile_image_url} alt='img'/> <Link to={userUrl+item.user.screen_name}>{item.user.name}</Link></div>
				<div>
				<p>{item.text}</p>
				<p>Likes: {item.favorite_count} || Retweets: {item.retweet_count} || Replies: {item.reply_count}</p>
				</div>
				<h6>Date: {date[1]+' '+date[2]+', '+date[5]+' '+date[3]}</h6>
				</div>);
		});
	}
	render(){
		// console.log(this.props.discoTweets);
		if(Array.isArray(this.props.discoTweets.items)===true && this.props.discoTweets.loading===false){	
			return (<div><SearchEn onSubmit={this.submit}/>
			</div>)
		}
		else if(this.props.discoTweets.error!==null){
			return (<div><SearchEn onSubmit={this.submit}/>
				<h4>Error, please reload the page.</h4>
			</div>) 
		}
		else if(this.props.discoTweets.loading===true){
			return (<div><SearchEn onSubmit={this.submit}/>
				<h4>Loading...</h4>
			</div>)
		}
		else{
			return (<div><SearchEn onSubmit={this.submit}/><hr/><h3>Results</h3>
				{ this.showPop() }
			</div>)
		}
	}
}

function mapStateToProps(state){
	return { discoTweets: state.discoTweets, login: state.login }
}

export default connect(mapStateToProps)(DiscoverTweets);