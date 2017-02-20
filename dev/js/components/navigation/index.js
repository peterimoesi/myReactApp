import React, {Component} from 'react';
import {Link} from 'react-router';
import MyForm from './search-form.js';


class Navigation extends React.Component {

	render(){
		return(<div id = "navigation">
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className = "container">
						<div className = "navbar-header">
							<a className="navbar-brand" href="#">React App</a>
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-hide" aria-expanded="false" aria-controls="navbar">
					            <span className="sr-only">Toggle navigation</span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
				         	</button>
						</div>
						<div className = "navbar-collapse collapse" id = "navbar-hide">
							<ul className = "nav navbar-nav">
								<li><Link to = "/">Movies</Link></li>
								<li><Link to = "tv">TV</Link></li>

							</ul>
							<MyForm />
						</div>
					</div>
				</nav>
				
			</div>		
			);
	}
}

export default Navigation;