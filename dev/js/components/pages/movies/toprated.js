import React, {Component} from 'react';
import axios from 'axios';

import MovieClass from '../../navigation/movieTopNav.js'
import Genre from '../../navigation/movieGenreNav.js'


class RatedMovies extends React.Component{
	
	constructor(){
		super();

		this.state = {
			page: 1,
			data: []
		}
	}

	componentDidMount() {

		let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=" + this.state.page;
		axios.get(url).then((results) =>{
			this.setState({
				data: results.data.results
			});
			
		})
	}

	loadItems() {
		
		var newPage = (this.state.page);
		newPage = newPage + 1
		this.setState({page: newPage})

		var previousResult = this.state.data;
		let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=" + this.state.page;
		axios.get(url).then((results) =>{
		//map the new results and push each into the previous state
			results.data.results.map((array) => {
				previousResult.push(array)
			})
			
			this.setState({
				data: previousResult
			});
			
		})
	}


	render() {

		const {data} = this.state;

		const AllResults = data.map((value, index) =>{

			if(index % 2 !== 0) {
				return (
						<div className = "col-lg-5 col-lg-offset-1 col-md-2 col-xs-12 movies" key = {index}>
							<div className = "row">
								<img className = "col-lg-6 col-xs-5 img img-responsive images" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
								
								<div className = "col-lg-6 col-xs-5 text">
									<h3>{value.original_title}</h3>
									<h6>{value.vote_average}</h6>
									<p>{value.overview}</p>
								</div>
							</div>
						</div>
					)
			} else {
				return (
						<div className = "col-lg-5 col-md-23 col-xs-12 movies" key = {index}>
							<div className = "row">
								<img className = "col-lg-6 col-xs-5 img img-responsive images" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
								<div className = "col-lg-6 col-xs-5 text">
									<h3>{value.original_title}</h3>
									<h6>{value.vote_average}</h6>
									<p>{value.overview}</p>
								</div>
							</div>
						</div>
					)}
			
			})

		return (<div className = "container-fluid">
					<MovieClass />
					<div className = "container movielists">
						<div className = "row">{AllResults}</div>
						<button onClick = {this.loadItems.bind(this)} className = "btn btn-default load-more">Load more</button>
					</div>
					<Genre />
				</div>
			)
	}
}

export default RatedMovies;