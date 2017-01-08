import React, { Component } from 'react';


export default class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      contactType: "",
      message: ""
    };

    this.submitEmail = this.submitEmail.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleContactTypeChange = this.handleContactTypeChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  submitEmail() {
    console.log("name: " + this.state.name);
    console.log("email: " + this.state.email);
    console.log("phone: " + this.state.phone);
    console.log("contactType: " + this.state.contactType);
    console.log("message: " + this.state.message);

    $.ajax({
      type: 'POST',
      url: '/contact',
      data: {
        name: this.state.name, 
        email: this.state.email, 
        phone: this.state.phone,
        contactType: this.state.contactType,
        message: this.state.message
      }
    })
      .done((data) => {
        console.log(data.message);
      })
      .fail((jqXhr) => {
        console.log(jqXhr.responseJSON.message);
      });
  }

  handleNameChange(event) {
    console.log("name changed to: " + event.target.value);
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleContactTypeChange(event) {
    console.log("Contqact Type changed");
    this.setState({contactType: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }
  

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
            <input type="text" id="name" name="name" placeholder="John Smith" value={this.state.name} onChange={this.handleNameChange} />

            <label for="email">Email Address: <span class="required">*</span></label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="johnsmith@example.com" required="required" />

            <label for="telephone">Telephone: </label>
            <input type="tel" id="telephone" name="telephone" placeholder="(780) 444 4444" value={this.state.phone} onChange={this.handlePhoneChange} />

            <label for="contactType">Preferred Mode of Contact: </label>
            <select id="contactType" name="contactType" onChange={this.handleContactTypeChange}>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>

            <label for="message">Message: <span class="required">*</span></label>
            <textarea id="message" name="message" placeholder="Enter your message here." value={this.state.message} onChange={this.handleMessageChange}></textarea>
             
            <input type="submit" value="Submit" id="submit-button" onClick={this.submitEmail} />
            <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
        
            </div>
          </div>
          </div>
         </div>
    );
  }
}
