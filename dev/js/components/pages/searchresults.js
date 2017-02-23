import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import axios from 'axios'; 

import Searching from '../navigation/search-form.js';
import Genre from '../navigation/movieGenreNav.js';
import MovieClass from '../navigation/movieTopNav.js';
import MyModal from './dataModal'




class SearchResults extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [],
			showModal: false,
			modalValue: [null, null, null],
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
	close(){
		
		this.setState({
			showModal: false
		})
	}
	//open modal
	open(value, e){
		//	console.log(value, e)
			this.setState({
				showModal: true,
				modalValue: [value.original_title, value.overview, value.poster_path]
			})
		}


	render(){

	const {data} = this.state;
	console.log(this.state.modalValue)

		const AllResults = data.map((value, index) =>{

				return (
						<li key = {index} className = "col-lg-3 col-md-3 col-xs-6 list-scrolling-2 frontpage-movies" onClick = {() => this.open(value, index)}>
							<img className = "img img-thumbnail frontpage-movies-img" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
							<figcaption><h3 className = "frontpage-movies-caption">{value.original_title}</h3></figcaption>
						</li>
					) 
			})


		return(
			<div>
				<Searching name = {(value) => this.searchLogic(value)}/>
				<div className = "container-fluid">
					<MovieClass />
					<div className = "container all-gird">

						<div className = "my-modal">

							<MyModal show={this.state.showModal} onHide = {this.close.bind(this)}>{this.state.modalValue}</MyModal>
						</div>
						<div className = "row all-class-movies">
							<ul className = "row">
								{AllResults}
							</ul>
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