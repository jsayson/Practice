import React, { Component } from 'react';

class Search extends Component{
	render(){
		return(<form>
			<input type='search' placeholder='Search' />
			<label>
			<input type='checkbox' />
			Only show products in stock
			</label>
			</form>);
	}
}

function MyLists(props){
	// console.log(props);
	let lists = props.list;
	console.log(lists);
	return <h1>Hello World</h1>;
}

const Lists = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class MyUI extends Component{
	render(){
		return (<div>
			<Search />
			<MyLists list={Lists}/>
			</div>);
	}
}

export default MyUI;