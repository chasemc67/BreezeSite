import React, { Component } from 'react';

export default class ServicesComponent extends Component {

	render() {
		return(
			<div className="container">
		        <div className="row">
		          <div className="twelve columns">
		            <h5>What We Do</h5>
		          </div>
		        </div>
		        
		          
		        {/*<!-- Mobile services begin -->*/}
		        <div className = "row" id = "servicesMColumns">
		          <div className = "four columns">
		              <h5>Setups</h5>
		              <div id = "setupLessM">
		              <p>Let us set up your new technology for you. You tell us what you want it to do, and we make it work. Sit back, relax, and watch the magic happen.</p>
		            </div>
		            <div id = "setupMoreM" style={{display: "none", textAlign:"left"}}>
		                <p>Our tech gurus set-up:
		<br /><br />•&nbsp;Printers
		<br />•&nbsp;Mobile devices (iPads, iPhones, and other tablets and smartphones)
		<br />•&nbsp;Home automation systems
		<br />•&nbsp;New computers
		<br />•&nbsp;Data transfers from your old devices to your new ones

		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
		</p> 
		            </div>
		            <button  id="setupBtnM">Show More</button>
		          </div>
		          <div className = "four columns">
		            <h5>Lessons</h5>
		            <div id = "lessonLessM">
		              <p>From basic computer skills, to software like Photoshop and more, our patient and skilled gurus will teach you what you want to know. In a casual, one-on-one atmosphere, you set the pace. No more frustrating classes!</p>
		            </div>
		            <div id = "lessonMoreM" style={{display: "none", textAlign: "left"}}>
		            <p>Our tech gurus can teach you how to:
		<br /><br />•&nbsp;Transfer data from cameras, phones, and tablets, to your computer
		<br />•&nbsp;Synchronize your files across your devices (iCloud, Google Drive, Microsoft OneDrive, Dropbox, etc.)
		<br />•&nbsp;Edit your photos and videos using software like Adobe Photoshop, Adobe Premier, iPhoto, and iMovie
		<br />•&nbsp;Navigate your computer’s basic functionalities with ease
		<br />•&nbsp;Use tools like email and web browsing
		                
		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form , and one of our gurus will be more than happy to help.</p>
		            </div>  
		            <button  id="lessonBtnM">Show More</button>
		          </div>
		          <div className = "four columns" style={{marginBottom: "15%"}}>
		               <h5>Repairs and Tune-Ups</h5>
		               <div id = "repairLessM">
		               <p>Have a trusted piece of technology that just isn’t working the way it used to? Let us know what the problem is, and we’ll take care of the rest.</p>
		              </div>
		              <div id = "repairMoreM" style={{display:"none", textAlign:"left"}}>
		                <p>Our tech gurus will take care of:
		<br /><br />•&nbsp;Speeding up slow computers
		<br />•&nbsp;Recovering/replacing broken or damaged hard-drives
		<br />•&nbsp;Virus removal (and anti-virus installation)
		                
		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.</p>
		              </div>
		              <button  id="repairBtnM">Show More</button>
		          </div>
		    </div>
		    
		        {/*<!-- Mobile services end -->*/}
		    
		        {/*<!-- Desktop services begin -->*/}
		        <div className = "row" id = "servicesDesktopHeaders">
		    
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
		    
		        <div className = "row" id = "servicesDesktopContent">
		          <div className = "four columns" >
		            <div id = "setupLess">
		              <p>Let us set up your new technology for you. You tell us what you want it to do, and we make it work. Sit back, relax, and watch the magic happen.</p>
		            </div>
		            <div id = "setupMore" style={{display:"none", textAlign:"left"}}>
		                <p>Our tech gurus set-up:
		<br /><br />•&nbsp;Printers
		<br />•&nbsp;Mobile devices (iPads, iPhones, and other tablets and smartphones)
		<br />•&nbsp;Home automation systems
		<br />•&nbsp;New computers
		<br />•&nbsp;Data transfers from your old devices to your new ones

		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
		</p> 
		            </div>
		          </div>
		          <div className = "four columns">
		            <div id = "lessonLess">
		              <p>From basic computer skills, to software like Photoshop and more, our patient and skilled gurus will teach you what you want to know. In a casual, one-on-one atmosphere, you set the pace. No more frustrating classes!</p>
		            </div>
		            <div id = "lessonMore" style={{display:"none", textAlign:"left"}}>
		            <p>Our tech gurus can teach you how to:
		<br /><br />•&nbsp;Transfer data from cameras, phones, and tablets, to your computer
		<br />•&nbsp;Synchronize your files across your devices (iCloud, Google Drive, Microsoft OneDrive, Dropbox, etc.)
		<br />•&nbsp;Edit your photos and videos using software like Adobe Photoshop, Adobe Premier, iPhoto, and iMovie
		<br />•&nbsp;Navigate your computer’s basic functionalities with ease
		<br />•&nbsp;Use tools like email and web browsing
		                
		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form , and one of our gurus will be more than happy to help.</p>
		            </div>
		          </div>
		          <div className = "four columns">
		              <div id = "repairLess">
		               <p>Have a trusted piece of technology that just isn’t working the way it used to? Let us know what the problem is, and we’ll take care of the rest.</p>
		              </div>
		              <div id = "repairMore" style={{display:"none", textAlign:"left"}}>
		                <p>Our tech gurus will take care of:
		<br /><br />•&nbsp;Speeding up slow computers
		<br />•&nbsp;Recovering/replacing broken or damaged hard-drives
		<br />•&nbsp;Virus removal (and anti-virus installation)
		                
		<br /><br />Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.</p>
		              </div>
		          </div>
		          </div>
		        <div className = "row" style = {{marginBottom: "15%"}} id = "servicesDesktopButtons">
		          <div className = "four columns" >
		            <button  id="setupBtn">Show More</button>
		          </div>

		          <div className = "four columns">
		            <button  id="lessonBtn">Show More</button>
		          </div>
		          <div className = "four columns">
		            <button  id="repairBtn">Show More</button>
		          </div>
		        </div> {/*<!-- End Row -->*/}

		        {/*<!-- Desktop services end -->*/}
		      </div>
		)
	}
}