import React from 'react';

import  { connect } from 'react-redux'; 

//actions
import { fetchTrends } from '../actions/trends';

// import { activeTrend } from '../actions/activeTrend';

// import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

class TrendTweet extends React.Component{
	handleClick(e){
		console.log(e.target.innerText);
	}
	render(){
		const { item, i } = this.props;
		const url = '/trends/';
		const firstStr = item.name.split('');
		const paramUrl = firstStr;
		// console.log(item.url);
		const urlChecker = firstStr[0] === '#' ? '%23' : '%22';
		const urlChecked = urlChecker === '%23' ? urlChecker.toString()+item.name.slice(1) : item.name;
		// console.log(firstStr[0] === '#' ? '%23' : '%22');
		return (<div> {i}.) <Link to={url+urlChecked} onClick={this.handleClick}>{item.name}</Link></div>);
	}
}

class Trends extends React.Component{	
	componentWillMount(){	
		this.props.dispatch(fetchTrends());
	}
	getTrends(){
		const { trends } = this.props;
		const tItem = trends.items.trends;
		// const popularUrl = '/popular/';
		var search = document.getElementById('search');
		if(String(tItem)==='undefined'){
			console.log('not yet loaded');
		}
		else{
			let i = 0;
			return (<div>{tItem.map(item=>{
				i++;
				// onClick={()=>this.props.activeTrend(item.name)}
				// <div key={i}><h4>{i}.) {item.name}</h4></div>
				if(i<=15){
					return (<TrendTweet key={i} item={item} i={i}/>)
				}
			})}
			</div>);
		}
	}
	render(){
		const { trends } = this.props;
		// console.log(localStorage);
		// console.log(this.props);
		if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
 			return <Redirect to='/' />
 		}
 		else{
		if(trends.error!=null){
			return <div>Error</div>
		}
		else if(String(trends.loading)==='true'){
			return <div>Loading...</div>;
		}
		else{
			return (<div><Link to='/top_users/1'>View Top Users</Link><hr/>
				{this.getTrends()}
				</div>);
		}	
 		}
	}
}
function mapStateToProps(state){
	return { trends : state.trends, login: state.login }; 
}

export default connect(mapStateToProps)(Trends);