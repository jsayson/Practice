import * as React from 'react';
import { Component } from 'react';

type Props = {
	greeting: string
}

class MComponent extends Component<Props>{
	static MyProp = {
		greeting: 'Hello World'
	}

	render(){
		return (<h1>{props.greeting}</h1>);
	}
}

export default MComponent;