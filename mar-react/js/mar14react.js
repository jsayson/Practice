import * as React from 'react';

// type TypeCheck = {
// 	num: number,
// 	text?: string
// 	//bar?: string
// }

// class MyComponent extends React.Component<TypeCheck>{
// 	render(){
// 		console.log(this);
// 		return <h1>{this.props.num}</h1>
// 	}
// }
// type Props = { /* ... */ };

// type State = {
//   count: number,
// };

// class MyComponent extends React.Component<Props, State>{
// 	state = {
// 		count: 'hi'
// 	};

// 	componentDidMount(){
// 		setInterval(()=>{
// 			this.setState(newState=>({
// 				count: newState.count + 1
// 			}));
// 		}, 1000);
// 	}

// 	render(){
// 		let timer = this.state.count > 0 ? this.state.count : 0;
// 		return (<h1>{timer}</h1>)
// 	}
// }

type Props = {
	num: number
}
	
// class MyComponent extends React.Component<Props> {
// 	// static defaultProp = {
// 	// 	num: 1
// 	// };
// 	render(){
// 		//console.log(this.defaultProp.num);
// 		return (<h1>{this.props.num}</h1>);
// 	}
// }

function MyComponent(props: Props){
	// static myProps = {
	// 	num: 1
	// }
	console.log(props);
	return (<h1>{props.num}</h1>);
}

class Flowify extends React.Component{
	render(){
		//console.log(this);
		return (<MyComponent num={1} />);
	}
}


export default Flowify;
