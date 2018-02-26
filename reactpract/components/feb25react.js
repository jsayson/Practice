import React, { Component } from 'react';

function Welcome(props){
	//console.log(props.username);
	return (<h1>{greeting}, {props.name}</h1>);
}

let greeting = 'Ohaiyo';

const profile ={
	username: 'kira',
	src: 'https://pm1.narvii.com/5868/cf5d50ac0453ecb3a9a8be41d1463044ed5dc5c0_hq.jpg',
	height: 255,
	width: 255
};

const element = <Welcome name='Kira' />;


class Fourth extends Component{
	render(){
		return (<div className='profile'>
		<Profile />
		{element}</div>);
	}
}

class Profile extends Component{
	render(){
		return (<img src={profile['src']} alt={profile.username} width={profile['width']+'px'} height={profile['height']+'px'} />);
	}
}

export default Fourth;