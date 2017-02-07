import React from 'react';
import ReactDOM from 'react-dom';
import ContactComponent from './ContactComponent';
import ServicesComponent from './ServicesComponent';
import TestimonialsComponent from './TestimonialsComponent'

import "../sass/testimonials.scss"

ReactDOM.render(<ServicesComponent />, document.getElementById('services'));
ReactDOM.render(<ContactComponent />, document.getElementById('contact'));
ReactDOM.render(<TestimonialsComponent />, document.getElementById('testimonials'));