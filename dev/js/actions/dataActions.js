import dispatcher from '../dispatcher'

export function createData(Title, Poster){
	dispatcher.dispatch({
		type: "ADD_DATA",
		Title,
		Poster
	})
} 