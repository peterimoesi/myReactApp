import React, {Component} from 'react';
import Genre from '../navigation/movieGenreNav.js';
import axios from 'axios';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';

import Header from './logo';
import MovieClass from '../navigation/movieTopNav.js';
import MyModal from './dataModal'

//import Scroll from './scroll';


class Movies extends React.Component {


	constructor(props){
		super(props);
		this.state = {
			popular: [],
			topRated: [],
			featured: [],
			Action: [],
			Adventure: [],
			Comedy: [],
			Romance: [],
			showModal: false,
			modalValue: [null, null, null]
		}
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

	//popular movie section
	popularMovies() {
		let randomNumber = Math.floor((Math.random() * 19) + 0);
		let url = "https://api.themoviedb.org/3/movie/popular?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=1";
		axios.get(url).then((results) =>{
			
			this.setState({
				popular: results.data.results,
				featured: results.data.results[randomNumber]
			});
		
		})
	}
	//top rated movie section
	ratedMovies() {
		let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=1";
		axios.get(url).then((results) =>{
			this.setState({
				topRated: results.data.results
			});		
		})
	}

	genre_actions() {
		let url = "https://api.themoviedb.org/3/genre/28/movies?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&include_adult=false&sort_by=created_at.asc";
		axios.get(url).then((results) =>{
			this.setState({
				Action: results.data.results
			});		
		})
	}

	genre_adventure() {
		let url = "https://api.themoviedb.org/3/genre/12/movies?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&include_adult=false&sort_by=created_at.asc";
		axios.get(url).then((results) =>{
			this.setState({
				Adventure: results.data.results
			});		
		})
	}
	genre_comedy() {
		let url = "https://api.themoviedb.org/3/genre/35/movies?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&include_adult=false&sort_by=created_at.asc";
		axios.get(url).then((results) =>{
			this.setState({
				Comedy: results.data.results
			});		
		})
	}
	genre_romance() {
		let url = "https://api.themoviedb.org/3/genre/10749/movies?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&include_adult=false&sort_by=created_at.asc";
		axios.get(url).then((results) =>{
			this.setState({
				Romance: results.data.results
			});		
		})
	}

	componentWillMount(){
		this.popularMovies();
		this.ratedMovies();
		this.genre_actions();
		this.genre_adventure();
		this.genre_comedy();
		this.genre_romance();
	}
//Create modal function and add to list
/*clicking(e){
	console.log("I clicked" + e)
}*/


	mapping(data) {
		return data.map((value, index) => {
			if(index < 10) {
			 	if(index == (0) || index == 10 || index == 5 || index == 15){
			 		return (
			 			<div>
				 			<li key = {index} className = "col-lg-5 col-md-6 col-xs-6 list-scrolling-1 frontpage-movies" id = {"modal" + index} onClick = {() => this.open(value, index)}>
				 				<img className = "img img-thumbnail frontpage-movies-img" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
				 				<figcaption><h3 className = "frontpage-movies-caption">{value.original_title}</h3>
				 				</figcaption>
				 			</li>
				 			
				 		</div>
			 			)
			 	} else {
			 		return (
						<li key = {index} className = "col-lg-3 col-md-6 col-xs-6 list-scrolling-2 frontpage-movies" onClick = {() => this.open(value, index)}>
							<img className = "img img-thumbnail frontpage-movies-img" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
							<figcaption><h5 className = "frontpage-movies-caption">{value.original_title}</h5></figcaption>
						</li>
						)
					}
			}
			
		})
	}


	render() {
		console.log(this)
		const {popular} = this.state;
		const {topRated} = this.state;
		const {Action} = this.state;
		const {Adventure} = this.state;
		const {Comedy} = this.state;
		const {Romance} = this.state;
		const {featured} = this.state;
		
		//popularMovies-scroll
		const Popular = this.mapping(popular);

		//top-rated-scroll
		const TopRated = this.mapping(topRated);

		//genre_actions-scroll
		const Genre_Action = this.mapping(Action);
			
		//genre_adventure-scroll
		const Genre_Adventure = this.mapping(Adventure);

		//genre_comedy-scroll
		const Genre_Comedy = this.mapping(Comedy);

		const Genre_Romance = this.mapping(Romance);

		return(
				<div className = "container-fluid">
					
					<Header />
					<div className = "container" id = "all-gird">


					<MyModal  show={this.state.showModal} onHide = {this.close.bind(this)}>{this.state.modalValue}</MyModal>



						<div className = "row all-class-movies">
							<div className = "col-lg-6 col-md-6 col-xs-12" id = "popular">
									<Link to = "/movies/popular"><h3>Popular</h3></Link>
									<div className = "scrolling">
										<ul className = "row scroll" id = "popular-scroll">
											{Popular}
										</ul>				
										<hr/>
									</div>
							</div>					

							<div className = "col-lg-6 col-md-6 col-xs-12" id = "top-rated">
								<Link to = "/movies/Top-rated"><h3>Top Rated</h3></Link>
								<div className = "scrolling">
									<ul className = "row scroll" id = "toprated-scroll">
										{TopRated}	
									</ul>
									<hr/>
								</div>				
							</div>
						</div>

						<div className = "container" id = "featured">
							<div className = "col-lg-12 col-md-12 col-xs-12 featured img-thumbnail" style = {{backgroundImage: "url(https://image.tmdb.org/t/p/w1300_and_h730_bestv2" + this.state.featured.backdrop_path + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom center"}}>
								<div className = "row">
									<div className = "col-lg-3 col-lg-offset-3 col-md-6 col-xs-6">
										<img className = "img img-responsive" src = {"https://image.tmdb.org/t/p/w640" + this.state.featured.poster_path}/>
									</div>
									<div className = "col-lg-4 col-md-6 col-xs-6">
										<h1>{this.state.featured.original_title}</h1>
										<p>{this.state.featured.overview}</p>
									</div>
								</div>
								
							</div>
						</div>

						<div className = "col-lg-6 col-md-6 col-xs-12" id = "genre_actions">
							<h3>Action</h3>
							<div className = "scrolling">
								<ul className = "row scroll" id = "genre_actions-scroll">
									{Genre_Action}
								</ul>
								<hr/>
							</div>
						</div>

						<div className = "col-lg-6 col-md-6 col-xs-12" id = "genre_adventure">
							<h3>Adventure</h3>
							<div className = "scrolling">
								<ul className = "row scroll" id = "genre_adventure-scroll">
									{Genre_Adventure}
								</ul>
								<hr/>
							</div>	
						</div>

						<div className = "col-lg-6 col-md-6 col-xs-12" id = "genre_comedy">
							<h3>Comedy</h3>
							<div className = "row scrolling">
								<ul className = "scroll" ref = "genre_comedy_scroll" id = "genre_comedy-scroll">
									{Genre_Comedy}
								</ul>
								<hr/>
							</div>	
						</div>

						<div className = "col-lg-6 col-md-6 col-xs-12" id = "genre_romance">
							<h3>Romance</h3>
							<div className = "row scrolling">
								<ul className = "scroll">
									{Genre_Romance}
								</ul>
								<hr/>
							</div>	
						</div>
					</div>
					<Genre />
				</div>
			)	
	}
}

export default Movies;

/*

			 				<Modal show={this.state.showModal} onHide={this.close} key = {index}>
					          <Modal.Header>
					            <Modal.Title>{value.original_title}</Modal.Title>
					          </Modal.Header>
					          <Modal.Body>
					           		<p>{value.overview}</p>
					          </Modal.Body>
					          <Modal.Footer>
					            <Button onClick={this.close.bind(this)}>Close</Button>
					          </Modal.Footer>
					        </Modal>
		*/