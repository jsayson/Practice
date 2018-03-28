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
	//console.log(props);
	let className = 'hide';
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
	isHidden(){
		console.log('hello');
	}
	render(){
		let img = this.props.images;
		return (<div>
			<div>{img.map((res, index)=><HandleImages img={res} key={index} id={index} />)}</div>
			<input type='submit' value='Expand' onClick={this.isHidden}/>
			</div>)
	}
}

class Section2 extends Component{
	render(){
		return <Port images={creations} />
	}
}

export default Section2;
