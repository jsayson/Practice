import React from 'react';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';
//actions
import { fetchUser } from '../actions/user';

import { fetchUserTweets } from '../actions/userTweets';

import { connect } from 'react-redux';

const imgStyle = {
	height: '150px',
	width: '150px',
	borderRadius: '50%'
}

const twitImgStyle = {
	height: '50px',
	width: '50px',
	borderRadius: '2px'
}

class Tweets extends React.Component{
	render(){
		const { item } = this.props;
		const link = '/user/';
		return (<div>
			<div><img src={item.user.profile_image_url} alt='img' style={twitImgStyle} /> <Link to={link+item.screen_name}>{item.user.name}</Link></div>
			<div>{item.full_text}</div>
			<div>Likes: {item.favorite_count} Retweets: {item.retweet_count}</div>
			<hr/>
			</div>)
	}
}


class User extends React.Component{
	componentWillMount(){
		const { name } = this.props.match.params;
		const apiUrl = '/api/user/';
		const userTweetUrl = `/api/user/${name}/tweets`;
		this.props.dispatch(fetchUser(apiUrl+name));
	}
	render(){
		const { user } = this.props;
		const { name } = this.props.match.params;
		const apiUrl = '/api/user/';
		const arr1 = [];
		console.log(this.props.login.item);
		if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
			return <Redirect to='/' />
		}
		else{	
		if(user.error!=null){
			return (<div><h3>Error: 404</h3><p>Please reload the page.</p></div>);

		}
		else if(String(user.loading)==='true'){
			return (<div><p><strong>Loading..</strong></p></div>);
		}
		else{
			if(Array.isArray(user.items)===true){
				return <h5>Getting info, loading...</h5>
			}
			else{
				return (
				<div><Link to='/trends'>Go back trends.</Link><div className='userProfile'>
				<div className='proImg'><img src={user.items.user.user.profile_image_url} alt={user.items.user.user.name} style={imgStyle} /></div>
				<div className='proInfo'>
				<h4>{user.items.user.user.name}</h4>
				<p>{user.items.user.user.description !== '' ? ('Bio: '+ user.items.user.user.description) : ''}</p>
				<p>Tweets: {user.items.user.user.statuses_count}</p>
				<p>Following: {user.items.user.user.friends_count}</p>
				<p>Followers: {user.items.user.user.followers_count}</p>
				<p>Likes: {user.items.user.user.favourites_count}</p>
				</div>
				<hr/>
				</div>
				<h3>Tweets</h3>
				<label>Sort by: </label><select>
					<option value='Latest'>Latest</option>
					<option value='Popularity'>Popularity</option>
				</select>
				<hr/>
				{ 
					user.items.user.tweets.map((val, index)=>{
					if(val===null){
						return false;
					}
					return <Tweets item={val} key={index}/>
					})
				}	
				</div>
				)	
			}
		}
		}
	}
}

function mapStateToProps(state){
	return ({ user: state.user, login: state.login });
}


export default connect(mapStateToProps)(User);