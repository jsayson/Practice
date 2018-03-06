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

function Webpage(props){
	console.log(props.children[0].props.className);
	return (<div className='page'>{props.children}</div>);
}

function Conversation(props){
	//console.log(props);
	return (<Webpage>
		<div className='title'><h1>{props.title}</h1></div>
		<div className='content'><p>{props.content}</p></div>
		</Webpage>);
}

function PageContent(){
	return (<Conversation title='This is the title' content='This is the content' />)
}

class Containment extends Component{
	render(){
		return (<PageContent />);
	}
}

export default Containment;
