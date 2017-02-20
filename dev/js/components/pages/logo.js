import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Video from 'react-html5video';

class Logo extends React.Component {

	constructor(){
		super();
		this.state = {
			videoUrl: 'https://github.com/peterimoesi/myReactApp/blob/master/dev/js/assets/suicide-squad.webm?raw=true',
			pos: {x: 0, y: 0},
			shadow: true,
		}
	}
	//parallax hover
	onMouseMove(e) {
        this.setState({
        	pos: {
        		x: e.pageX,
        		y: e.pageY
        	}
        });

        this.CreateShadow();
	}

	CreateShadow() {
	
	    if ('ontouchstart' in window == false && this.state.shadow) {

	            let [moveX, moveY] = [(this.state.pos.x / -10), (this.state.pos.y / -50)];

	            let [Section, firstWord, secondWord] = [ReactDOM.findDOMNode(this.refs.section), ReactDOM.findDOMNode(this.refs.playword_1), ReactDOM.findDOMNode(this.refs.playword_2)];

				firstWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
				secondWord.style.transform = `translate3d(${moveX / 1}px, ${moveY}px, 0)`;
				Section.style.textShadow = `${moveX}px ${-moveY}px rgba(0, 0, 0, 0.1)`;

		}
	}

	render(){
		return (
					<div className = "container-fluid" id = "video-background" onMouseMove={this.onMouseMove.bind(this)}>
						<Video autoPlay loop muted>	 	
						 	<source src= {this.state.videoUrl} type="video/webm" />
						 	Video not supported
						</Video>
						<header ref = "section">
							<img ref = "playword_1" src = "https://github.com/peterimoesi/myReactApp/blob/master/dev/js/assets/mylogo-1.png?raw=true"/>
							<img ref = "playword_2" src = "https://github.com/peterimoesi/myReactApp/blob/master/dev/js/assets/mylogo-2.png?raw=true"/>
						</header>
					</div>
			)
	}
}
export default Logo;