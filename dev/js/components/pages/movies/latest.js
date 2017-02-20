import React, {Component} from 'react';
import axios from 'axios';

import MovieClass from '../../navigation/movieTopNav.js';
import Genre from '../../navigation/movieGenreNav.js'


class LatestMovie extends React.Component{
	
	constructor(){
		super();

		this.state = {
			data: []
		}
	}

	componentDidMount() {

		let url = "https://api.themoviedb.org/3/movie/latest?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US";
		axios.get(url).then((results) =>{
			this.setState({
				data: results.data
			});
			
		})
	}


	render() {

		const {data} = this.state;
		

		return (<div className = "container-fluid">
					<MovieClass />
					<div className = "container movielists">
						<div className = "row">
							<div className = "col-lg-8 col-md-2 col-xs-12 col-lg-offset-2 movies">
								<div className = "row">
									<img className = "col-lg-6 col-xs-5 img img-responsive images" src = {"https://image.tmdb.org/t/p/w640" + data.poster_path} />
									<div className = "col-lg-6 col-xs-5 latest text">
										<h3>{data.original_title}</h3>
										<h6>{data.vote_average}</h6>
										<p>{data.overview}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Genre />
				</div>
			)
	}
}

export default LatestMovie;