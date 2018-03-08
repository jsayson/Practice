import React, { Component } from 'react';

class Search extends Component{
	render(){
		return(<form>
			<input type='search' placeholder='Search' />
			<br />
			<label>
			<input type='checkbox' />
			Only show products in stock
			</label>
			</form>);
	}
}

function GetLists(props){
	//console.log(props);
	let lists = props.list;
	let key = ((lists[0].name.charAt(0))+(lists[0].name.length)+(lists[0].name.charAt(lists[0].name.length-1))).toString();
	// console.log(key);
	//return <h1>Hello to you</h1>;
	return (<table><tr><th>Name</th><th>Price</th></tr>{lists.map((lists)=><MyLists key={key} id={key} name={lists.name} price={lists.price} />)}</table>)
}

function MyLists(props){
	// console.log(props);
	let lists = props;
	return (<tr id={lists.id}><td>{props.name}: </td><td>{props.price}</td></tr>);
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
			<GetLists list={Lists}/>
			</div>);
	}
}

export default MyUI;