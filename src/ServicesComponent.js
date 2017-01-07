import React, { Component } from 'react';

export default class ServicesComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			expandSetup: false,
			expandLesson: false,
			expandRepair: false
		};
	}


	getSetupButton() {
		if (this.state.expandSetup == false) {
			return (<button id="setupBtn" onClick={() => this.setState({expandSetup: true})}>Show More</button>);
		}
		else {
			return (<button id="setupBtn" onClick={() => this.setState({expandSetup: false})}>Show Less</button>);
		}
	}

	getLessonButton() {
		if (this.state.expandLesson == false) {
			return (<button id="lessonBtn" onClick={() => this.setState({expandLesson: true})}>Show More</button>);
		}
		else {
			return (<button id="lessonBtn" onClick={() => this.setState({expandLesson: false})}>Show Less</button>);
		}
	}

	getRepairButton() {
		if (this.state.expandRepair == false) {
			return (<button id="repairBtn" onClick={() => this.setState({expandRepair: true})}>Show More</button>);
		}
		else {
			return (<button id="repairBtn" onClick={() => this.setState({expandRepair: false})}>Show Less</button>);
		}
	}


	getSetupContent() {
		if (!this.state.expandSetup) {
			return(
				<div id = "setupLess">
	              <p>Let us set up your new technology for you. You tell us what you want it to do, and we make it work. Sit back, relax, and watch the magic happen.</p>
	            </div>
			);
		} else {
			return (
				<div id = "setupMoreM" style={{textAlign:"left"}}>
		                <p>Our tech gurus set-up:
							<br /><br />•&nbsp;Printers
							<br />•&nbsp;Mobile devices (iPads, iPhones, and other tablets and smartphones)
							<br />•&nbsp;Home automation systems
							<br />•&nbsp;New computers
							<br />•&nbsp;Data transfers from your old devices to your new ones

							<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
						</p> 
				</div>
			);
		}
	}

	getLessonConetent() {
		if (!this.state.expandLesson) {
			return(
				<div id = "lessonLess">
		              <p>From basic computer skills, to software like Photoshop and more, our patient and skilled gurus will teach you what you want to know. In a casual, one-on-one atmosphere, you set the pace. No more frustrating classes!</p>
		            </div>
			);
		} else {
			return (
				<div id = "lessonMore" style={{textAlign: "left"}}>
		            <p>Our tech gurus can teach you how to:
						<br /><br />•&nbsp;Transfer data from cameras, phones, and tablets, to your computer
						<br />•&nbsp;Synchronize your files across your devices (iCloud, Google Drive, Microsoft OneDrive, Dropbox, etc.)
						<br />•&nbsp;Edit your photos and videos using software like Adobe Photoshop, Adobe Premier, iPhoto, and iMovie
						<br />•&nbsp;Navigate your computer’s basic functionalities with ease
						<br />•&nbsp;Use tools like email and web browsing
						                
						<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form , and one of our gurus will be more than happy to help.
					</p>
		        </div>  
			);
		}

	}

	getRepairContent() {
		if (!this.state.expandRepair) {
			return(
				<div id = "repairLess">
		        	<p>Have a trusted piece of technology that just isn’t working the way it used to? Let us know what the problem is, and we’ll take care of the rest.</p>
		        </div>
			);
		} else {
			return (
				<div id = "repairMore" style={{textAlign:"left"}}>
		                <p>Our tech gurus will take care of:
							<br /><br />•&nbsp;Speeding up slow computers
							<br />•&nbsp;Recovering/replacing broken or damaged hard-drives
							<br />•&nbsp;Virus removal (and anti-virus installation)
							                
							<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
						</p>
		        </div>
			);
		}
	}

	render() {
		return(
			<div className="container">
		        <div className="row">
		          <div className="twelve columns">
		            <h5>What We Do</h5>
		          </div>
		        </div>
		        
		          
		        {/*<!-- Mobile services begin -->*/}
		        <div className = "row servicesMobile" id = "servicesMColumns">
		          <div className = "four columns">
		              <h5>Setups</h5>
		              {this.getSetupContent()}		        
		              {this.getSetupButton()}
		          </div>
		          <div className = "four columns">
		            <h5>Lessons</h5>
		            {this.getLessonConetent()}
		            {this.getLessonButton()}
		          </div>
		          <div className = "four columns" style={{marginBottom: "15%"}}>
		               <h5>Repairs and Tune-Ups</h5>
		              {this.getRepairContent()}
		              {this.getRepairButton()}
		          </div>
		    	</div>
		    
		        {/*<!-- Mobile services end -->*/}
		    
		        {/*<!-- Desktop services begin -->*/}
		        <div className = "row servicesDesktop" id = "servicesDesktopHeaders">
		    
		        <div className = "four columns">
		            <h5>Setups</h5>
		        </div>
		        <div className = "four columns">
		            <h5>Lessons</h5>
		        </div>
		        <div className = "four columns">
		            <h5>Repairs and Tune-Ups</h5>
		        </div>
		        </div>
		    
		        <div className = "row servicesDesktop" id = "servicesDesktopContent">
		          <div className = "four columns" >
		            {this.getSetupContent()}
		          </div>
		          <div className = "four columns">
		            {this.getLessonConetent()}
		          </div>
		          <div className = "four columns">
		              {this.getRepairContent()}
		          </div>
		          </div>
		        <div className = "row servicesDesktop" style = {{marginBottom: "15%"}} id = "servicesDesktopButtons">
		          <div className = "four columns" >
		            {this.getSetupButton()}
		          </div>

		          <div className = "four columns">
		            {this.getLessonButton()}
		          </div>
		          <div className = "four columns">
		            {this.getRepairButton()}
		          </div>
		        </div> {/*<!-- End Row -->*/}

		        {/*<!-- Desktop services end -->*/}
		      </div>
		)
	}
}