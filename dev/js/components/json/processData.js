import React, {Component} from 'react';
import * as DataActions from '../../actions/dataActions'
import Data from '../../store/datastore';

class DataProcess extends React.Component{
	
	constructor(){
		super();
		this.state = {
			data: Data.datas
		}
	}

	componentWillMount() {
		Data.on("change", ()=>{
			this.setState({
				data: Data.datas
			})
		})
	}

	myData() {
		return(
				<div>
					<input type = "text" ref = "addTitle" placeholder = "Add title"/>
					<input type = "text" ref = "addurl" placeholder = "Add url"/>
				</div>
			)
	}

	createData(){
		DataActions.createData(this.refs.addTitle.value, this.refs.addurl.value)
	}

	render(){
		console.log(this.state)
		const { data } = this.state;

		const AllData = data.map((value, index) => {
			return (<div key = {index} className = "col-lg-2 col-md-2 col-xs-3 results">
						<img src = {value.Poster} className = "img-thumbnail"/>
						<h4>{value.Title}</h4>
					</div>
					)
		})

		return(
				<div>
					<div className = "row">
						<button onClick = {this.createData.bind(this)} className = "btn btn-default">Add Data</button>
						{this.myData()}
					</div>
					<div className = "row all-results">
						{AllData}
					</div>
				</div>
				)
	}
}

export default DataProcess;