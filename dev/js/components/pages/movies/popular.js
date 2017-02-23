import React, {Component} from 'react';
import axios from 'axios';
import MovieClass from '../../navigation/movieTopNav.js';
import MyModal from '../dataModal';
import Genre from '../../navigation/movieGenreNav.js'

class PopularMovies extends React.Component{
	
	constructor(){
		super();

		this.state = {
			page: 1,
			data: [],
			showModal: false,
			modalValue: [null, null, null],
		}
	}

	componentWillMount() {

		let url = "https://api.themoviedb.org/3/movie/popular?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=" + this.state.page;
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


	loadItems() {
		
		var newPage = (this.state.page);
		newPage = newPage + 1
		this.setState({page: newPage})

		var previousResult = this.state.data;
		let url = "https://api.themoviedb.org/3/movie/popular?api_key=b8e1b8ea0882abd47355a62d25dd6db8&language=en-US&page=" + this.state.page;
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
				return (
						<li key = {index} className = "col-lg-3 col-md-3 col-xs-6 list-scrolling-2 frontpage-movies" onClick = {() => this.open(value, index)}>
							<img className = "img img-thumbnail frontpage-movies-img" src = {"https://image.tmdb.org/t/p/w640" + value.poster_path} />
							<figcaption><h3 className = "frontpage-movies-caption">{value.original_title}</h3></figcaption>
						</li>
					)
			
			})

		return (			

				<div className = "container-fluid">
					<MovieClass />
					<div className = "container all-gird" id = "all-gird">

						<div className = "my-modal">

							<MyModal show={this.state.showModal} onHide = {this.close.bind(this)}>{this.state.modalValue}</MyModal>
						</div>
						<div className = "row all-class-movies">
							<ul className = "row scroll">
								{AllResults}
							</ul>
						</div>
					</div>
					<button onClick = {this.loadItems.bind(this)} className = "btn btn-default load-more">Load more</button>
					<Genre />
				</div>
			)
	}
}

export default PopularMovies;