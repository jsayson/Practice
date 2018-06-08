import React from 'react';

//actions
import { fetchTopUsers } from '../actions/topUsers';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

//import css
import '../css/topUsers.css';

class TopUsers extends React.Component{
	componentWillMount(){
		console.log(this.props);
		const { page } = this.props.match.params; 
		this.props.dispatch(fetchTopUsers(page));
	}
	render(){
		// console.log(this.props);
		const { topUsers } = this.props;
		// console.log(topUsers); 
		if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
			return <Redirect to='/' />
		}
		else{
		if(topUsers.error!==null){
			return <h5>Please Reload the page</h5>;
		}
		else if(String(topUsers.loading)==='true'){
			return <h5>Loading...</h5>;
		}
		else{
			const url = '/user/'
			console.log(topUsers)
			return (<div className='topUsers'>
			<div className='pages'>
			<ul><h4>Page: {this.props.match.params.page}</h4>
			<li><Link to='/top_users/1' onClick={()=>this.props.dispatch(fetchTopUsers(1))}>1</Link></li>
			<li><Link to='/top_users/2' onClick={()=>this.props.dispatch(fetchTopUsers(2))}>2</Link></li>
			<li><Link to='/top_users/3' onClick={()=>this.props.dispatch(fetchTopUsers(3))}>3</Link></li>
			<li><Link to='/top_users/4' onClick={()=>this.props.dispatch(fetchTopUsers(4))}>4</Link></li>
			</ul>
			</div>
			{ topUsers.items.map((item, index)=>{
				return (<div key={index} className='topUserDetails'>
							<div className='topUserImg'><img src={item.profile_image_url} alt='image'/><Link to={url+item.screen_name}>{item.name}</Link></div>
							<div className='topUserDesc'><p>{ item.description === '' ? '' : 'Bio: '+ item.description}</p></div>
							<div className='topUserItems'><h4>Tweets: {item.statuses_count.toLocaleString()} | Following: {item.friends_count.toLocaleString()} | Followers: {item.followers_count.toLocaleString()} | Likes: {item.favourites_count.toLocaleString()}</h4></div><hr/>
						</div>)
			})
			}
			</div>);
		}	
		}
	}
}

function mapStateToProps(state){
	return { topUsers: state.topUsers , login : state.login };
}

export default connect(mapStateToProps)(TopUsers);