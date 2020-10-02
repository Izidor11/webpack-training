import React, { Fragment } from 'react';
import './MyComponent.scss';

class MyComponent extends React.Component {
	render() {
		console.log("log")
		return(
			<div className="x">
			<h1>{this.props.title}</h1>
		</div>
		) 
		//return React.createElement('h1', null, `Title: ${this.props.title}`)
	}
}


export default MyComponent;