import React, { Component } from 'react';


const myFooter = {
	reserved: '',
	year: 2018
}

class FooterInfo extends Component{
	render(){
		return (<div className='footer'><p>&copy; {this.props.info.year}</p></div>);
	}
}
class Footer extends Component{
	render(){
		return <FooterInfo info={myFooter} />
	}
}

export default Footer;
