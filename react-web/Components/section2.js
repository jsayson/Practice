import React, { Component } from 'react';

//import pic
import calc from '../pic/calc.jpg';
import udacity from '../pic/udacity.jpg';
import twitch from '../pic/twitchApi.png';
import search from '../pic/search.jpg';
import generate from '../pic/generate.png';
import weather from '../pic/weather.png';

const creations = [
{
	imgSrc: search,
	name: 'search'
},
{
	imgSrc: weather,
	name: 'weather'
},
{
	imgSrc: calc,
	name: 'calc'
},
{
	imgSrc: udacity,
	name: 'udacity'
},
{
	imgSrc: twitch,
	name: 'twitch'
},
{
	imgSrc: generate,
	name: 'generate'
}
];

function HandleImages(props){
	//console.log(props.status);
	let status = props.status === 'Show' ? 'hide' : 'show'; 
	let className = status;
	//console.log(className);
	if(props.id<=1){
		return (<div><img src={props.img.imgSrc} alt={props.img.name} id={props.id} /></div>);	
	}
	else{
		return (<div className={className}><img src={props.img.imgSrc} alt={props.img.name} id={props.id} /></div>);
	}
}

class Port extends Component{
	constructor(props){
		super(props);
		this.state = {
			hide: true
		}
		this.isHidden = this.isHidden.bind(this);
	}
	isHidden(e){
		this.setState({
			hide: !this.state.hide
		})
		e.preventDefault();
		//console.log(this.state.hide);
	}
	render(){
		let img = this.props.images;
		let status = this.state.hide === true ? 'Show' : 'Show Less';
		return (<div>
			<div>{img.map((res, index)=><HandleImages img={res} key={index} id={index} status={status}/>)}</div>
			<input type='submit' value={status} onClick={this.isHidden}/>
			</div>)
	}
}

class Section2 extends Component{
	render(){
		return <Port images={creations} />
	}
}

export default Section2;
