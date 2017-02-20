import {EventEmitter} from "events";
import dispatcher from '../dispatcher'
import Data from './data';

class DataStore extends EventEmitter{
	constructor() {
		super()
		this.datas = Data.Search
	}

	addNewData(Title, Poster){
		this.datas.push({
			Title,
			Poster
		})
		this.emit("change");
	}

	handleAction(action){
		switch (action.type) {
			case "ADD_DATA": {
							this.addNewData(action.Title, action.Poster);
			}
		}
	}
}

	const dataStore = new DataStore;
	dispatcher.register(dataStore.handleAction.bind(dataStore))
	window.dispatcher = dispatcher;

export default dataStore;