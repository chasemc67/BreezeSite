// http://kenwheeler.github.io/nuka-carousel/#/

// https://blog.hubspot.com/marketing/testimonial-page-examples


// Thinking 3 tall white rounded rects in the middle of the page
// Circular picture out top, with name underneath, 
// and then testimonial under that.

// Hitting next button animates a slide to 3 new testimonies
// So carousel wont be edge to edge, but rather contained in the
// middle of the page (probably edge to edge on mobile though)

import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import TestFace from "../img/chase_breeze_bio.png"
import "../sass/testimonials.scss"

export default class TestimonialsComponent extends Component {
	constructor(props){
		super(props)
	}

	getTestimony(image, text) {
		return(
			<div className="testimony">
				<img src={image} />
				<div className="testimonyBody">
					<p>{text}</p>
				</div>
			</div>
		);
	}

	render() {
		return(
			<Carousel>
				<div className="testimonyGroup">
					{this.getTestimony(TestFace, "Omg its my face")}
					{this.getTestimony(TestFace, "Omg its your face")}
					{this.getTestimony(TestFace, "Omg its their face")}
				</div>
		        <div className="testimonyGroup">
					{this.getTestimony(TestFace, "Omg its my face")}
					{this.getTestimony(TestFace, "Omg its your face")}
					{this.getTestimony(TestFace, "Omg its their face")}
				</div>
				<div className="testimonyGroup">
					{this.getTestimony(TestFace, "Omg its my face")}
					{this.getTestimony(TestFace, "Omg its your face")}
					{this.getTestimony(TestFace, "Omg its their face")}
				</div>
				<div className="testimonyGroup">
					{this.getTestimony(TestFace, "Omg its my face")}
					{this.getTestimony(TestFace, "Omg its your face")}
					{this.getTestimony(TestFace, "Omg its their face")}
				</div>
		    </Carousel>
		);
	}

}