import React, {Component} from 'react';
import Genre from '../navigation/tvGenreNav.js';
import axios from 'axios';
import Header from './logo';


class Tvs extends React.Component {

	render() {

		return(<div>
					<Genre />
					<Header />
				</div>
			)	
	}
}

export default Tvs;