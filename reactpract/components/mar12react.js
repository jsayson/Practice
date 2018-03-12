import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeChecking extends Component{
	static defaultProps = {
		name: 'guest'
	}

	render(){
		const name = this.props.name || 'admin';
		return (<h1>{String(name) === 'undefined' ? 'No current user.' : 'Welcome, '+name.charAt(0).toUpperCase()+name.slice(1)}</h1>);
	}
}

// TypeChecking.defaultProps = {
// 	name: 'guest'
// }

TypeChecking.propTypes = {
	name: PropTypes.string.isRequired,
	customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
};

export default TypeChecking;
