import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, hashHistory } from 'react-router';
//step1 
import App from './app.js';

import Movies from './components/pages/movies.js';
import Tv from './components/pages/tv.js';
import Search from './components/pages/searchresults.js';

import Rated from './components/pages/movies/toprated.js';
import Latest from './components/pages/movies/latest.js';
import Popular from './components/pages/movies/popular.js'



ReactDOM.render(<Router history = {hashHistory}>
					<Route path = '/' component = {App}>
						<IndexRoute component = {Movies}>		
						</IndexRoute>
						<Route path='/search' component = {Search}></Route>
						<Route path='movies/Top-Rated' component = {Rated}></Route>
						<Route path='movies/Popular' component = {Popular}></Route>
						<Route path='movies/Latest' component = {Latest}></Route>
						<Route path='tv' component = {Tv}></Route>
					</Route>
				</Router>, document.getElementById('root')

);
