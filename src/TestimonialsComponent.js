// http://kenwheeler.github.io/nuka-carousel/#/

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import TestFace from "../img/chase_breeze_bio.png"

export default class TestimonialsComponent extends Component {
	constructor(props){
		super(props)
	}

	getTestimony(image, text) {
		return(
			<div className="testimony">
				<img src={image} />
				<h2>{text}</h2>
			</div>
		);
	}

	render() {
		return(
			<Carousel>
				{this.getTestimony(TestFace, "Omg its my face")}
		        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
		        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
		        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
		        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
		        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
		    </Carousel>
		);
	}

}