import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';


import Navigation from './components/navigation/index.js';


class App extends React.Component {

	render(){
		return(
				<div>

					<Navigation />	
					{this.props.children}
				</div>
			);
	}
}

export default App;