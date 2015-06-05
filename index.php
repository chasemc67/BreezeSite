<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <title>Breeze Technical Services</title>
  <meta name="author" content="Chase, McCarty, Bradley, Poulette">
  <meta name="description" content="An Edmonton based in home technology service company.">
  <meta name="keywords" content="edmonton, computer, help, training, repair, lessons, service, technology">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <link rel="stylesheet" href="css/layout.css">

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"> </script>
  <script src="javascript/jqueryFunctions.js"></script>




  <link rel="icon" type="image/png" href="images/favicon.png">

</head>
<body>
    
    
  <div class = "band landing">
      <div class = "nav_stripe">
          <div class="container" style="margin-bottom:0;">
              
                    <picture>
                       <!--<source media="(min-width: 64em)" src="./images/high-res_logo.png">
                       <source media="(min-width: 37.5em)" src="./images/med-res_logo.png">
                       <source src="./images/low-res_logo.png">-->
                       <img src="./images/breeze_logo_low_res_100v3.png" alt="Breeze Technical Services" id="breezeLogo">
                    </picture>
                
                
                    <div class = "list nav">
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                
                <!-- <div class = "three columns"> -->
                    <h5 id="phoneNumber">(587) 782 4441</h5> 
                <!-- </div> -->
              
          </div> <!-- End Container -->
      </div>
    <div class="twelve columns">
        <div class = "text container">
            <h1>Get Comfortable</h1>
            <h2>This is going to be a breeze.</h2>
            <div class="scroll down" style="float: right; margin-top: 20%; display: none;">
              <h2>Scroll Down</h2>
            </div>
        </div>
    </div>
  </div> <!-- End Band -->


  <div class="band description">
    <div class = "landing gradient">
    </div>
    <div class="container">
      <div class="row">
        <div class="twelve columns" style = "margin-top:15%;">
          <h4>Homegrown in Edmonton, Alberta since 2014</h4>
        </div>
      </div>
      <div class="row">
            <div class="twelve columns">
                <h5>At a time when it is crucial to have a basic understanding of what technology is out there and how to use it, it can be hard to keep up. We provide in-home service, teaching fundamental tech skills, as well as solving more complicated problems. We offer service that is a cut above the rest by putting the customer first, and never compromising on quality.</h5>
            </div>
      </div>
      <div class="row">
          <div class="twelve columns" style = "margin-bottom:12%;">
              <h5>We look forward to seeing you soon.</h5>
          </div>
        </div>
    </div>
  </div>


  
  <div class = "band services" id="services">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <h5>What We Do</h5>
          </div>
        </div>
        
          
        <!-- Mobile services begin -->
        <div class = "row" id = "servicesMColumns">
          <div class = "four columns">
              <h5>Setups</h5>
              <div id = "setupLessM">
              <p>Let us set up your new technology for you. You tell us what you want it to do, and we make it work. Sit back, relax, and watch the magic happen.</p>
            </div>
            <div id = "setupMoreM" style="display:none;text-align:left;">
                <p>Our tech gurus set-up:
<br><br>•&nbsp;Printers
<br>•&nbsp;Mobile devices (iPads, iPhones, and other tablets and smartphones)
<br>•&nbsp;Home automation systems
<br>•&nbsp;New computers
<br>•&nbsp;Data transfers from your old devices to your new ones

<br><br>Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
</p> 
            </div>
            <button  id="setupBtnM">Show More</button>
          </div>
          <div class = "four columns">
            <h5>Lessons</h5>
            <div id = "lessonLessM">
              <p>From basic computer skills, to software like Photoshop and more, our patient and skilled gurus will teach you what you want to know. In a casual, one-on-one atmosphere, you set the pace. No more frustrating classes!</p>
            </div>
            <div id = "lessonMoreM" style="display:none;text-align:left;">
            <p>Our tech gurus can teach you how to:
<br><br>•&nbsp;Transfer data from cameras, phones, and tablets, to your computer
<br>•&nbsp;Synchronize your files across your devices (iCloud, Google Drive, Microsoft OneDrive, Dropbox, etc.)
<br>•&nbsp;Edit your photos and videos using software like Adobe Photoshop, Adobe Premier, iPhoto, and iMovie
<br>•&nbsp;Navigate your computer’s basic functionalities with ease</span>
<br>•&nbsp;Use tools like email and web browsing
                
<br><br>Don’t see what you want on the list? Request a free consultation using the contact form , and one of our gurus will be more than happy to help.</p>
            </div>  
            <button  id="lessonBtnM">Show More</button>
          </div>
          <div class = "four columns" style = "margin-bottom:15%;">
               <h5>Repairs and Tune-Ups</h5>
               <div id = "repairLessM">
               <p>Have a trusted piece of technology that just isn’t working the way it used to? Let us know what the problem is, and we’ll take care of the rest.</p>
              </div>
              <div id = "repairMoreM" style="display:none;text-align:left;">
                <p>Our tech gurus will take care of:
<br><br>•&nbsp;Speeding up slow computers
<br>•&nbsp;Recovering/replacing broken or damaged hard-drives
<br>•&nbsp;Virus removal (and anti-virus installation)
                
<br><br>Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.</p>
              </div>
              <button  id="repairBtnM">Show More</button>
          </div>
    </div>
    
        <!-- Mobile services end -->
    
        <!-- Desktop services begin -->
        <div class = "row" id = "servicesDesktopHeaders">
    
        <div class = "four columns">
            <h5>Setups</h5>
        </div>
        <div class = "four columns">
            <h5>Lessons</h5>
        </div>
        <div class = "four columns">
            <h5>Repairs and Tune-Ups</h5>
        </div>
        </div>
    
        <div class = "row" id = "servicesDesktopContent">
          <div class = "four columns" >
            <div id = "setupLess">
              <p>Let us set up your new technology for you. You tell us what you want it to do, and we make it work. Sit back, relax, and watch the magic happen.</p>
            </div>
            <div id = "setupMore" style="display:none;text-align:left;">
                <p>Our tech gurus set-up:
<br><br>•&nbsp;Printers
<br>•&nbsp;Mobile devices (iPads, iPhones, and other tablets and smartphones)
<br>•&nbsp;Home automation systems
<br>•&nbsp;New computers
<br>•&nbsp;Data transfers from your old devices to your new ones

<br><br>Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.
</p> 
            </div>
          </div>
          <div class = "four columns">
            <div id = "lessonLess">
              <p>From basic computer skills, to software like Photoshop and more, our patient and skilled gurus will teach you what you want to know. In a casual, one-on-one atmosphere, you set the pace. No more frustrating classes!</p>
            </div>
            <div id = "lessonMore" style="display:none;text-align:left;">
            <p>Our tech gurus can teach you how to:
<br><br>•&nbsp;Transfer data from cameras, phones, and tablets, to your computer
<br>•&nbsp;Synchronize your files across your devices (iCloud, Google Drive, Microsoft OneDrive, Dropbox, etc.)
<br>•&nbsp;Edit your photos and videos using software like Adobe Photoshop, Adobe Premier, iPhoto, and iMovie
<br>•&nbsp;Navigate your computer’s basic functionalities with ease</span>
<br>•&nbsp;Use tools like email and web browsing
                
<br><br>Don’t see what you want on the list? Request a free consultation using the contact form , and one of our gurus will be more than happy to help.</p>
            </div>
          </div>
          <div class = "four columns">
              <div id = "repairLess">
               <p>Have a trusted piece of technology that just isn’t working the way it used to? Let us know what the problem is, and we’ll take care of the rest.</p>
              </div>
              <div id = "repairMore" style="display:none;text-align:left;">
                <p>Our tech gurus will take care of:
<br><br>•&nbsp;Speeding up slow computers
<br>•&nbsp;Recovering/replacing broken or damaged hard-drives
<br>•&nbsp;Virus removal (and anti-virus installation)
                
<br><br>Don’t see what you want on the list? Request a free consultation using the contact form below, and one of our gurus will be more than happy to help.</p>
              </div>
          </div>
          </div>
        <div class = "row" style = "margin-bottom: 15%;" id = "servicesDesktopButtons">
          <div class = "four columns" >
            <button  id="setupBtn">Show More</button>
          </div>

          <div class = "four columns">
            <button  id="lessonBtn">Show More</button>
          </div>
          <div class = "four columns">
            <button  id="repairBtn">Show More</button>
          </div>
        </div> <!-- End Row -->

        <!-- Desktop services end -->
      </div> <!-- End Container -->
  </div> <!-- End Band -->

  <div class = "band pricing" id = "pricing">
    <div class = "row" style="text-align: center;">
      <h4>Pricing</h4>
      <h5>Travel included! (a $60 value)</h5>
    </div>

    <div class = "row" style="margin-left: 40px; margin-right:40px; margin-bottom:7%;"> 
      <div class = "four columns" > 
        <h1 >$90</h1>
        <!--h2 style = "display: inline;">one visit </h2-->

        <div class = "item" id = "setup">
          <div class = itemContent>
            <h3 style="margin-top:30px;">Setup</h3>
          </div>
        

        <h5 class = "or">OR</h5>

        
          <h3>Repair</h3>
        

        <h5 class = "or">OR</h5>

        
          <h3 style="margin-bottom:28px;">2-Hour Lesson</h3>
        </div>

        <a href="#" onclick="return false" class="popper" data-popbox="pop1">Info</a> 
        <div id="pop1" class="popbox">
          <p>Allow 1 hour for standard setups. </p>
          <p>In extreme cases additional hourly rates may apply</p>
          <p>Allow 1 hour for standard repairs.</p> 
          <p>Offsite may apply. Parts extra.</p>
        </div>        

      </div>

      <div class = "four columns" id="test">
        <h1>$300</h1>
        <!--h2 style = "display: inline;">six months</h2-->        

        <div class = "item" id = "setup/repair">
          <h3 style="margin-top:30px;">6 Months</h3>
          <h5 style="margin-top:22px;">In-home setup <br>and repair</h5>
          <br>
        

        <h5 class = "or">OR</h5>

        
          <h3 style="margin-bottom:30px;">5 Lessons</h3>
        </div>

        <a href="#" onclick="return false" class="popper" data-popbox="pop2">Info</a> 
        <div id="pop2" class="popbox">
          <p>Monthly memberships are fully transferable</p>
          <p>Memberships include one standard repair or setup per month. </p>
          <p>Parts not included</p>
        </div>        

      </div>

      <div class = "four columns">
        <h1>$500</h1>
        <!--h2 style = "display: inline;">twelve months</h2-->        

        <div class = "item" id = "setup/repair">
          <h3 style="margin-top:30px;">12 Months</h3>
          <h5>In-home setup <br>and repair</h5>
          <h5>+ phone support</h5>

        <h5 class = "or">OR</h5>

          <h3 style="margin-bottom:30px;">10 Lessons</h3>
        </div>


        <a href="#" onclick="return false" class="popper" data-popbox="pop3">Info</a> 
        <div id="pop3" class="popbox">
          <p>Monthly memberships are fully transferable</p>
          <p>Memberships include one standard repair or setup per month.</p> 
          <p>Parts not included</p>
          <p>Phone support is unlimited, and available during standard business hours.</p>
        </div>  

      </div>



    </div>


  </div>

  <div class = "band payment" id = "payment">
    <div class = "row">
        <div class = "twelve columns" style = "margin-bottom: 10%">
            <picture>
                <img src = "images/Payment Images/mastercard_no_bg_200.png" alt="Mastercard">
            </picture>
            <picture>
                <img src = "images/Payment Images/visa_no_bg_200.png" alt="Visa">
            </picture>
            <picture>
                <img src = "images/Payment Images/amex_no_bg_200.png" alt="American Express">
            </picture>
            <picture>
                <img src = "images/Payment Images/interac_no_bg_200.png" alt="Interac">
            </picture>
        </div>
      </div>
      
      <div class = "row" style="display:none;">
          <div class = "twelve columns" style = "margin-bottom: 10%;">
            <picture>
                <img src = "images/Payment Images/moneris_payd_no_bg_200.png" alt="Moneris Payd Pro">
                <!-- <img src = "images/Payment Images/square_no_bg_200.png" alt="Square"> -->
            </picture>
        </div>
      </div>
  </div>

  <div class = "band testimonies" id = "testimonies" style="display:none;">
    <div class = "container">
      <div class = "row">
        <div class = "twelve columns">
          <h5>Testimonies</h5>    
        </div> <!-- End Columns -->
      </div> <!-- End Row -->
      <div class = "row">
        <div class = "slideshow container">
          <div> 
            <h5>Text 1</h5>
          </div>
          <div> 
            <h5>Text 2</h5>
          </div>
          <div> 
            <h5>Text 3</h5>
          </div>
          <div> 
            <h5>Text 4</h5>
          </div>

        </div> <!-- End Slideshow container -->
      </div> <!-- End Row -->

      <button id="slideshowPrev" style="inline" >Prev</button>
      <button id="slideshowNext" style="inline" >Next</button>
      <button id="slideOff" style="inline" >Slide</button>

      <div id="slideTest" style="display: inline;">Test </div>

    </div> <!-- End Container -->
  </div> <!-- End Band -->

  <div class = "band about" id="about">
      <div class="container">
        <div class="row">
          <div class= "twelve columns">
            <h5>Who We Are</h5>
          </div>
        </div>
        <div class="row" style = "margin-right:auto; margin-left:auto;">
          <div class = "six columns" style = "text-align:center;">
              <div class = "bio picture" style = "padding-left:10px; padding-right:10px;">
                <picture>
                    <img src="./images/chase_breeze_bio.png" alt="Breeze Technical Services" >
                </picture>
                <h3>Chase</h3>
                <p class = "last" style = "text-align:justify;">Chase will be going into his fourth year of his Bachelor of Science degree, with a specialization in Computing Science. To pay for school, Chase has worked various jobs building, servicing, and programming computers, and has earned his Apple Certified Mac Technician certificate doing so. Being just as patient when teaching as he is focused when learning, Chase has brought the wonders of technology into people’s lives for years. <br><br>In his spare time, Chase enjoys teaching snowboarding, reading, and making sure Bradley doesn’t starve.</p>  

              </div> 
            </div>
            <div class="six columns" style = "text-aligh:center;">
              <div class = "bio picture" style = "padding-left:10px; padding-right:10px;">
                <picture>
                    <img src="./images/bradley_breeze_bio.png" alt="Breeze Technical Services" >
                </picture>
                <h3>Bradley</h3>
                <p class = "last" style = "text-align:justify;">
Bradley recently graduated from the University of Alberta with a Bachelor of Arts in Psychology and Computing Science. During his time as a student, he paid for school by taking jobs as tech support, a camera salesman, a photographer, and a computer programmer. Bradley’s calm nature and technical proficiency has allowed him to help people from all walks of life truly feel comfortable with their technology. <br><br>In his spare time, Bradley enjoys rock climbing, building robots, and eating all of Chase's food.
</p>
              </div>
          </div>
        </div> <!-- End Row -->
      </div> <!-- End Container -->
  </div> <!-- End Band -->
    
    
  <div class = "band contact" id="contact">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <h5>Contact Us</h5>
          </div>
        </div>

        <div class = "row">
          <div class="twelve columns" style = "margin-bottom: 10%;">
            <div id="contact-form">

            <?php
            //init variables
            $cf = array();  //contact form
            $sr = false;    //server response

            if(isset($_SESSION['cf_returndata'])){
              $cf = $_SESSION['cf_returndata'];
              $sr = true;
            }
            ?>

            <ul id="errors" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
              <li id="info">There were some problems with your form submission:</li>
              <?php 
              if(isset($cf['errors']) && count($cf['errors']) > 0) :
                  foreach($cf['errors'] as $error) :
              ?>
              <li><?php echo $error ?></li>
              <?php
                  endforeach;
              endif;
              ?>
            </ul>
            <p id="success" class="<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">Thanks for your message! We will get back to you ASAP!</p>
        
            <form method="post" action="PHP/process.php">
                      <label for="name">Name: <span class="required">*</span></label>
                      <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="John Doe" required="required" <?php echo($sr && !$cr['form_ok'] ? 'autofocus="autofocus"' : '')?> />
                       
                      <label for="email">Email Address: <span class="required">*</span></label>
                      <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="johndoe@example.com" required="required" />
                       
                      <label for="telephone">Telephone: </label>
                      <input type="tel" id="telephone" name="telephone" placeholder="(780) 444 4444" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />
                       
                      <label for="contactType">Preferred Mode of Contact: </label>
                      <select id="contactType" name="contactType" >
                          <option value="email" <?php echo($sr && !$cr['form_ok'] && $cf['posted_form_data']['contactType'] == 'email') ? "selected='selected'" : '' ?>>Email</option>
                          <option value="phone" <?php echo($sr && !$cr['form_ok'] && $cf['posted_form_data']['contactType'] == 'phone') ? "selected='selected'" : '' ?>>Phone</option>
                      </select>
                       
                      <label for="message">Message: <span class="required">*</span></label>
                      <textarea id="message" name="message" placeholder="Enter your message here." required= data-minlength="4"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
                       
                      <input type="submit" value="Submit" id="submit-button" />
                      <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
            </form>
            <?php unset($_SESSION['cf_returndata']); ?>
            </div>
          </div>
          </div>
          </div>
        </div> <!-- End Row -->
      </div> <!-- End Container -->
  </div> <!-- End Band -->

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>
