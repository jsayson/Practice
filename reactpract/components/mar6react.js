import React, { Component } from 'react';

// function FancyBorder(props){
// 	console.log(props);
// 	return (<div className={props.color}>
// 		{props.children}
// 		</div>);
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

// function Contacts(){
// 	return (<div className='Contacts'><h1>Contacts</h1></div>);
// }

// function Chat(){
// 	return (<div className='Messages'><h1>Chat</h1></div>);
// }

// function Page(props){
// 	console.log(props);
// 	return (<div className="SplitPane">
//       		<div className="SplitPane-left">
//         	{props.left}
//       		</div>
//       		<div className="SplitPane-right">
//         	{props.right}
//       		</div>
//     		</div>);
// }

// function Webpage(props){
// 	console.log(props.children[0].props.className);
// 	return (<div className='page'>{props.children}</div>);
// }

// function Conversation(props){
// 	//console.log(props);
// 	return (<Webpage>
// 		<div className='title'><h1>{props.title}</h1></div>
// 		<div className='content'><p>{props.content}</p></div>
// 		</Webpage>);
// }

// function PageContent(){
// 	return (<Conversation title='This is the title' content='This is the content' />)
// }

function Dialog(props){
	console.log(props.children[0].props.value);
	return (<div className='content'><div className='about'><h1>{props.title}</h1><p>{props.message}</p></div>
		<div className='inputs'>{props.children}</div></div>);
}

class PageContent extends Component{
	constructor(props){
		super(props);
		this.state = { message : ''}
		this.handleThisChange = this.handleThisChange.bind(this);
		this.handleThisOutput = this.handleThisOutput.bind(this);
	}

	handleThisChange(e){
		this.setState({message : e.target.value});
	}

	handleThisOutput(){
		console.log(this.state.message);
		alert(this.state.message === 'yes' ? (this.state.message.charAt(0).toUpperCase()+this.state.message.slice(1)) + '?, then you\'re going to DIE!' : 'Want to learn magic?');
	}
	render(){
		return (<Dialog title='Learn Magic' message='Are you a mage?'>
			<input value={this.state.message} onChange={this.handleThisChange} />
			<input type='submit' onClick={this.handleThisOutput} value='submit'/>				
			</Dialog>);
	}
}

class Containment extends Component{
	render(){
		return (<PageContent />);
	}
}

export default Containment;
