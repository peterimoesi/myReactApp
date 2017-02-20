import React, {Component} from 'react';
import {Link} from 'react-router';


class MovieClass extends React.Component {

	constructor() {
		super();
		this.state = {
			data : ["Popular", "Top-Rated", "Upcoming"]
		}
	}

	render() {
		
		const {data} = this.state;
		const AllData = data.map((value, index) =>{

						return (
							<li key = {index}><Link to ={"movies/" + value}>{value}</Link></li>
						)
		})

		return(
			<div className = "class-navigation">
		        <nav className = "navbar navbar-default">
		        	<div className = "container">
			        	<div className = "navbar-header">
					        <button type="button" className="navbar-toggle collapsed showGenre" data-toggle="collapse" data-target="#navbar-hide-secondtop" aria-expanded="false" aria-controls="navbar">
					        	Show Class
							</button>
						</div>
			        	<div className = "navbar-collapse collapse" id = "navbar-hide-secondtop">
			        		 <ul className="nav navbar-nav">
			        		 	{AllData}
			        		 </ul>
			        	</div>
			        </div>
		        </nav>
	      	</div>
			)
	}
}

export default MovieClass;