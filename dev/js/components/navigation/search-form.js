import React, {Component} from 'react';

import axios from 'axios'; 
import {Link} from 'react-router';


class MyForm extends React.Component {

constructor(){
		super();
		this.state = {
			data: [],
			page: 1
		}
	}

searching() {
	searchProps(this.refs.inputValue.value)
}
	render() {

  	window.searchProps = this.props.name;
		return(
			<div className = "navbar-form navbar-right">
		        <input type = "text" ref = "inputValue" className = "form-control" placeholder="Search" />
		        <Link to = "/search"><button className = "btn btn-default" onClick = {this.searching.bind(this)}>Search</button></Link>

	      	</div>
			)
	}
}

export default MyForm;
