import React, {Component} from 'react';
import {Link} from 'react-router';

import GenreData from '../../store/tvGenreStore';

class Genre extends React.Component {

	constructor() {
		super();
		this.state = {
			data :GenreData.genres
		}
	}

	showGenre

	render() {
		

		const {data} = this.state;
		const AllData = data.map((value, index) =>{

				if(index < 12) {
										return (
											<li key = {value.id}><Link to ="#">{value.name}</Link></li>
										)}
		})

		return(
			<footer className = "genre-navigation">
		        <nav className = "navbar navbar-inverse navbar-fixed-bottom">
		        	<div className = "container">
			        	<div className = "navbar-header">
					        <button type="button" className="navbar-toggle collapsed showGenre" data-toggle="collapse" data-target="#navbar-hide-bottom" aria-expanded="false" aria-controls="navbar">
					        	Show Genre
							</button>
						</div>
			        	<div className = "navbar-collapse collapse" id = "navbar-hide-bottom">
			        		 <ul className="nav navbar-nav nav-bottom">
			        		 	{AllData}
			        		 </ul>
			        	</div>
			        </div>
		        </nav>
	      	</footer>
			)
	}
}

export default Genre;