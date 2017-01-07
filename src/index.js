import React from 'react';
import ReactDOM from 'react-dom';
import ContactComponent from './ContactComponent';
import ServicesComponent from './ServicesComponent';

ReactDOM.render(<ServicesComponent />, document.getElementById('services'));
ReactDOM.render(<ContactComponent />, document.getElementById('contact'));