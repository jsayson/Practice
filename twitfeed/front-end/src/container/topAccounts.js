import React from 'react';

class TopUsers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: []
		}
	}
	// componentDidMount(){
	// 	fetch('http://friendorfollow.com/js/fof.1526742440.js', {dataType: 'jsonp'}).then(res=>res.json()).then(res=>this.setState({item: res}));
	// }
	render(){
		const { item } = this.state;
		console.log(item);
		return <h1>Hello World</h1>
	}
}

export default TopUsers;