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
	imgSrc: calc,
},
{
	imgSrc: udacity,
},
{
	imgSrc: twitch,
},
{
	imgSrc: search,
},
{
	imgSrc: generate,
},
{
	imgSrc: weather,
}
];

class Port extends Component{
	render(){
		return <h1>Hello World</h1>
	}
}

class Section2 extends Component{
	render(){
		return <Port images={creations} />
	}
}

export default Section2;
