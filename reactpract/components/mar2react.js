import React, { Component } from 'react';


//by using the .map method it creates a new set of arrays from its old array
// function MyLists(){
// const numbers = [1,2,3,4,5];
// //const doubles = numbers.map((numbers)=>{return numbers*2});
// const listItems = numbers.map((numbers)=>{
// 	return (<li>{parseInt(numbers)}</li>);
// });
// }

// //console.log(numbers);
// //console.log(doubles);
// //console.log(listItems);

// class Lists extends Component{
// 	render(){
// 		return (<ul>
// 			{MyLists}
// 			</ul>);
// 	}
// }

function MyLists(props){
	//console.log(props);
	let num = props.numbers;
	//a key is a special attribute that is needed to include in a lists
	let lists = num.map((num, index)=><ListItem key={num.toString()} item={num} />);
	return (<ul>{lists}</ul>);
	//so a key acts as an ID for the values that is in a list, it identifies which items has changed, deleted or added
}

function ListItem(props){
	console.log(props);
	return <li>{props.item}</li>;
}
	//recommended not to use the indexes for keys cos if the items will change it would have a negative impact on performance and may cause issues on state components
const numbers = [1,2,3,4,5];

class Lists extends Component{
	render(){
		return <MyLists numbers={numbers} />
	}
}
export default Lists;
