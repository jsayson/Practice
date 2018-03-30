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
		// console.log(this.props.social);
		let res = this.props.social.map((res,index)=>{
			return <a key={index} className={res.className} href={res.link}></a>
		})
		return (<div>{res}</div>);
	}
}

const magic = [
	{name: 'codepen', className: 'fa fa-codepen', link: 'https://codepen.io/Sssrnty'},
	{name: 'freecodecamp', className: 'fa fa-free-code-camp', link: 'https://www.freecodecamp.org/sssrnty'},
	{name: 'github', className: 'fa fa-github', link: 'https://github.com/sssrnty'},
	{name: 'instagram', className: 'fa fa-instagram', link: 'https://instagram.com/sssrnty'},
	{name: 'linkedin', className: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/jm-sayson'},
	{name: 'twitter', className: 'fa fa-twitter', link: 'https://twitter.com/Sssrnty'}
];

class About extends Component{
	constructor(props){
		super(props);
		this.state = {
			viewed: false
		}
		this.imViewed = this.imViewed.bind(this);
	}
	imViewed(e){
		this.setState({
			viewed: !this.state.viewed
		});
		e.preventDefault();
	}
	render(){
		const val = this.props.info;
		return (<div  id='section1'><div className={this.state.viewed === false ? 'click' : 'clicked' }><img src={val.imgSrc} alt={val.alt} height={val.height} width={val.width} onClick={this.imViewed}/></div>
			<div className='intro'><p>The Name is Jm</p></div>
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
