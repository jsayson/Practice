import React, { Component } from 'react';


const about = {
	address : {
	 	blk: 20,
	 	lot: 5,
	 	st: 'Philippians St.',
	 	brgy: 'San Antonio',
	 	city: 'San Pedro',
	 	province: 'Laguna',
	},
	phone: '+639453828681',
	email: 'josemarisayson@gmail.com'
}

class Info extends Component{
	render(){
		//console.log(this.props);
		const add = this.props.add;
		return (<div>
			<p>Blk {add.blk} Lot {add.lot} {add.st} {add.brgy} {add.city} {add.province}</p>
			<p>{this.props.email}</p>
			<p>{this.props.phone}</p>
			</div>);
	}
}

class Section3 extends Component{
	render(){
		return <Info phone={about.phone} email={about.email} add={about.address} />
	}
}

export default Section3;
