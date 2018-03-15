import * as React from 'react';

// class DefProps extends React.Component<Props>

type Props = {
	num: number
}

function DefProp(props: Props){
	console.log(props);
	return <h1>{props.num}</h1>
}

DefProp.defaultProps = {
	num: 1
}

export default DefProp;