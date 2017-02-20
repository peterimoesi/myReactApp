import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap'

class MyModal extends React.Component{
	constructor(){
		super();
		this.state = {
			showModal: null
		}
	}



	render(){
	console.log(this.state.showModal, this.props.show)
		

		return(<div>
			
				<Modal show = {this.props.show} onHide = {this.props.onHide}>
		          <Modal.Header closeButton style = {{backgroundImage: "url(https://image.tmdb.org/t/p/w1300_and_h730_bestv2" + this.props.children[2] + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'top center'}}>
		            <Modal.Title>{this.props.children[0]}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body style = {{backgroundImage: "url(https://image.tmdb.org/t/p/w1300_and_h730_bestv2" + this.props.children[2] + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
		           		<div className = "modal-body-content">
		           			{this.props.children[1]}
		           		</div>
		          </Modal.Body>
		          <Modal.Footer style = {{backgroundImage: "url(https://image.tmdb.org/t/p/w1300_and_h730_bestv2" + this.props.children[2] + ")", backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center'}}>
		          		<div className = "modal-footer-content">	
		          			<Button onClick={this.props.onHide}>Close</Button>
		          		</div>
		          </Modal.Footer>
		        </Modal>
		       </div>
			)
	}
}

export default MyModal;