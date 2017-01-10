import React, { Component } from 'react';


export default class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      contactType: "email",
      message: "",

      badPhone: false,
      badEmail: false,

      messageSuccessful: false

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


    this.setState({badPhone: false, badEmail: false});

    if (!this.validityCheck()) {
      return false;
    }

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
        // console.log(jqXhr.responseJSON.message);
        console.log("Post request failed");
      });
  }

  validityCheck() {
    if (this.state.contactType == "email") {
      let badEmail = !this.checkValidEmail(this.state.email);
      this.setState({badEmail: badEmail});
      return !badEmail;
    } else if (this.state.contactType == "phone") {
      let badPhone = !this.checkValidPhone(this.state.phone);;
      this.setState({badPhone: badPhone});
      return !badPhone;
    } else {
      console.log("unknown contact type chose");
      return true;
    }
  }

  checkValidEmail(email) {
    console.log("Checking email");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  checkValidPhone(phone) {
    console.log("Checking phone number");
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
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

  checkBadInput(inputType) {
    if (this.state[inputType]){
      return {borderColor:"red"};
    } else {
      return {};
    }
  }

  getMessageStatus() {
    return (
      <div className="row">
        <div className="twelve columns" style={{marginBottom: "10%"}}>
          Omg you sent a message
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h5>Contact Us</h5>
          </div>
        </div>

        {this.getMessageStatus()}

        <div className = "row">
          <div className="twelve columns" style={{marginBottom: "10%"}}>
            <div id="contact-form">

            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="John Smith" value={this.state.name} onChange={this.handleNameChange} />

            <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" name="email" style={this.checkBadInput("badEmail")} value={this.state.email} onChange={this.handleEmailChange} placeholder="johnsmith@example.com" required="required" />

            <label htmlFor="telephone">Telephone: </label>
            <input type="tel" id="telephone" name="telephone" style={this.checkBadInput("badPhone")} placeholder="(780) 444 4444" value={this.state.phone} onChange={this.handlePhoneChange} />

            <label htmlFor="contactType">Preferred Mode of Contact: </label>
            <select id="contactType" name="contactType" value={this.state.contactType} onChange={this.handleContactTypeChange}>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
            </select>

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" placeholder="Enter your message here." value={this.state.message} onChange={this.handleMessageChange}></textarea>
             
            <input type="submit" value="Submit" id="submit-button" onClick={this.submitEmail} />
        
            </div>
          </div>
          </div>
         </div>
    );
  }
}
