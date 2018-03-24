import React, { Component } from 'react';

import image from '../pic/me.png';

const img = {
	imgSrc: image,	
	alt: 'Picture',
	height: '100px',
	width: '100px'
}

// const social = [
// 	{name: 'codepen', className: 'fa fa-codepen'},
// 	{name: 'freecodecamp', className: 'fa fa-free-code-camp'},
// 	{name: 'github', className: 'fa fa-github'},
// 	{name: 'instagram', className: 'fa fa-instagram'},
// 	{name: 'linkedin', className: 'fa fa-linkedin'},
// 	{name: 'twitter', className: 'fa fa-twitter'}
// ];

// class SocialMed extends Component{
// 	render(){
// 		const social = this.props.social;
// 		console.log(social);
// 		return (social.forEach((index)=>{
// 		<a key={index} className={social[index]}>{social[index].name}</a>
// 		}));
// 	}
// }

// function Row(props){
// 	console.log(props);
// 	return <li>{props.name}</li>
// }

class SocialMed extends Component{
	render(){
		// console.log(social);
		// return (<ul>{this.props.social.forEach((val,index)=>{
		// 	// console.log(val.name);
		// 	<Row key={index} name={index} />
		// })}</ul>);
		console.log(this.props.social);
		let res = this.props.social.map((res,index)=>{
			return <a key={index} className={res.className} href="###"></a>
		})
		return (<div>{res}</div>);
	}
}

const magic = [
	{name: 'codepen', className: 'fa fa-codepen'},
	{name: 'freecodecamp', className: 'fa fa-free-code-camp'},
	{name: 'github', className: 'fa fa-github'},
	{name: 'instagram', className: 'fa fa-instagram'},
	{name: 'linkedin', className: 'fa fa-linkedin'},
	{name: 'twitter', className: 'fa fa-twitter'}
];

class About extends Component{
	render(){
		const val = this.props.info;
		return (<div><div><img src={val.imgSrc} alt={val.alt} height={val.height} width={val.width}/></div>
			<div className='intro'><h1>The Name is Jm</h1></div>
			<div className='links'><SocialMed social={magic}/></div>
			</div>)	
	}
}

class Section1 extends Component{
	render(){
		return (<About info={img} />);
	}
}

export default Section1;
