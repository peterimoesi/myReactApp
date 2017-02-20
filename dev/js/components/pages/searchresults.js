import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import axios from 'axios'; 

import Searching from '../navigation/search-form.js';
import Genre from '../navigation/movieGenreNav.js';
import MovieClass from '../navigation/movieTopNav.js';




class SearchResults extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [],
			page: 1
		}
	}

	searchLogic(value) {
		let url = "https://api.themoviedb.org/3/search/multi?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&query=" + value + "&page=" + this.state.page + "&include_adult=false";
			axios.get(url).then((results) =>{
				this.setState({
					data: results.data.results
				});		
			})
	}


	/*	const AllResults = data.map((value, index) =>{

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
					<MovieClass />
					<div className = "container movielists">
						<div className = "row">{AllResults}</div>
					
					</div>
					<Genre />
				</div>
			)*/
	

	render(){

	const {data} = this.state;

		const AllResults = data.map((value, index) =>{

			if(index % 2 !== 0) {
				return (
						<div className = "col-lg-5 col-lg-offset-1 col-md-6 col-xs-12 movies" key = {index}>
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
						<div className = "col-lg-5 col-md-6 col-xs-12 movies" key = {index}>
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


		return(
			<div>
				<Searching name = {(value) => this.searchLogic(value)}/>
				<div className = "container-fluid">
					<MovieClass />
					<div className = "container movielists">
						<div className = "row">
							{AllResults}
						</div>
					</div>
					<Genre />
				</div>
			)

			</div>
			)
		}
}

export default SearchResults;