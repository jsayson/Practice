import React, { Component } from 'react';

function FancyBorder(props){
	console.log(props);
	return (<div className={props.color}>
		{props.children}
		</div>);
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

class Containment extends Component{
	render(){
		return (<WelcomeDialog />);
	}
}

export default Containment;
