import React, {Fragment} from 'react';

class MyComponent extends React.Component {
	render() {
		console.log("log")
		return(
		<Fragment>
		<h1>{this.props.title}</h1>
		</Fragment>
		) 
		//return React.createElement('h1', null, `Title: ${this.props.title}`)
	}
}


export default MyComponent;