import React, { Component } from 'react';

function Comment(props){
	console.log(props.user);
	let lastName = props.user.lName.charAt(0).toUpperCase()+props.user.lName.slice(1);
	let firstName = props.user.fName.charAt(0).toUpperCase()+props.user.fName.slice(1);
	return (
		<div className='profile'>
		<UserInfo user={props.author} />
		<h2 className='name'>{lastName}, {firstName}</h2>
		<div className='about'>
		<p className='age'>Age: {props.user.about.age}</p>
		<p className='gender'>Gender: {props.user.about.gender.charAt(0).toUpperCase()+props.user.about.gender.slice(1)}</p>
		</div>
		</div>
		);
}

function Avatar(props){
	// console.log(props);
	return (
		<img src={props.user.iUrl} alt={props.user.altName} />
		);
}

function UserInfo(props){
	// console.log(props);
	return (
		<div className="UserInfo">
      	<Avatar user={props.user} />
    	</div>
		);
}

const comment = {
	user: {
		fName: 'First',
		lName: 'Last',
		about: {
			age: 21,
			gender: 'male'
		}
	},
	avatar: {
		iUrl: 'http://placekitten.com/g/64/64',
		altName: 'Cat'
	}
}

class Fifth extends Component{
	render(){
		return <Comment user={comment.user} author={comment.avatar}/>;
	};
}

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}/>
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64',
//   },
// };

// class Fifth extends Component{
// 	render(){
// 		return (<Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}/>)
// 	};
// }

export default Fifth;