import React, { Component } from 'react';



export default class ContactComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h5>Contact Us</h5>
          </div>
        </div>

        <div className = "row">
          <div className="twelve columns" style={{marginBottom: "10%"}}>
            <div id="contact-form">

            <label for="name">Name: <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="John Smith" value="" />

            <label for="email">Email Address: <span class="required">*</span></label>
            <input type="email" id="email" name="email" value="" placeholder="johnsmith@example.com" required="required" />

            <label for="telephone">Telephone: </label>
            <input type="tel" id="telephone" name="telephone" placeholder="(780) 444 4444" value="" />

            <label for="contactType">Preferred Mode of Contact: </label>
            <select id="contactType" name="contactType" >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>

            <label for="message">Message: <span class="required">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message here."></textarea>
             
            <input type="submit" value="Submit" id="submit-button" />
            <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
        
            </div>
          </div>
          </div>
         </div>
    );
  }
}
