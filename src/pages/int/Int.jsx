import React, { useState } from "react";
import {Link } from "react-router-dom";
import {Header} from '../../containers';
import internet from "../../assets/internet.png";
import insertSimCard from "../../assets/Insert_Sim_Card.png";
import threeSimCard from "../../assets/threesim.png";
import mobileData from "../../assets/3G4G5G.png";
import router from "../../assets/Router.png";
import noSignal from "../../assets/No_Signal.png";
import govanHousing from "../../assets/Govan_Housing_Assoication.png";
import elderLib from "../../assets/Elder_Park_Library.png";
import ibroxLib from "../../assets/Ibrox_Library.png";
import govanStores from "../../assets/Govan_Store_Locations.png";

import { BackToTop } from "../../components";
import { TextReader } from "../../components";

import "./int.css";







import screenControl from "../../assets/ScreenControl.jpg";
import barcode from "../../assets/Barcode.png";
import qrcode from "../../assets/RickQR.png";
import cookie from "../../assets/cookie.png";
import lightbulb from "../../assets/idea.png";
import touchscreen from "../../assets/touchscreen.jpg";
import homeIcon from "../../assets/homeIcon.png";
import settingsIcon from "../../assets/settingsIcon.png";
import ellipsisIcon from "../../assets/ellipsisIcon.png";
import barIcon from "../../assets/barIcon.png";
import playIcon from "../../assets/playIcon.png";
import envelopeIcon from "../../assets/envelopeIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import refreshIcon from "../../assets/refreshIcon.png";
import binIcon from "../../assets/binIcon.png";
import shareIcon1 from "../../assets/shareIcon1.png";
import shareIcon2 from "../../assets/shareIcon2.png";
import shareIcon3 from "../../assets/shareIcon3.png";
import { Invert } from "../../components";

/*import MyComponent  from 'src\pages\int\quiz.js';*/

const Int = () => {
	return (
		<div className="int-container">
			<div className="header-cont">
          <Header />
          <div className='invert-page'>
            <Invert />
        </div>
      </div>
      <TextReader />
     
		<div className="mid-section">
			<h2>Internet Access</h2>	
			<div class="IAintro">
				<p>
					In this page, you can learn basic knowledge of using the internet, as well as how to gain internet access with your device.	
				</p>
			</div>
			<br />
			<br />
		
			<div class="internet101">
				
				<div class="intro101">
					<h3>How to surf the internet 101</h3>
						<p>
							Have you ever been confused when using websites or different software? Like not understanding some terms or not knowing where to click?
							Here you can learn the basic stuff and keep you from getting lost!
						</p>
				</div>

				<div class="controlsTutorial">
					<b><u><h3>Controls :</h3></u></b>
					<p>
						Here are some basic controls you have to know.
					</p>

					<div class="tutorialPara">
						<h4>Mobile devices</h4>
						<div class="screenControlContainer">
								<img class="screenControlImg" src={screenControl} alt="" id="ScreenControl"/>
								{/* &lt; is the HTML name for the "<" symbol */}
						</div>
						<center><i class="credit">Credit:</i><a href="http://creativecommons.org/licenses/by-sa/3.0/">
										Touch Gesture Reference Guide. Creative Commons.</a>
						</center>
					</div>
					<br />
					<div class="tutorialPara">
						<h4>Computers</h4>
						<p>
							A mouse usually has two buttons, a right and left one and also a central wheel which allows you to scroll up and down the page. 
							The left and right button have different functions. 
						</p>
						<p>
						Left clicking usually lets you put your cursor at a certain point on the page or lets you choose a menu item. 
						Right clicking brings you up a list of relevant menu items from which you can select a task. 
						</p>
					</div>
				</div>

				<div class="iconTutorial">
				<b><u><h3>Icons :</h3></u></b>
					<p>
						Here are some icons that are commonly seen on buttons, with simple explanation of their function.
					</p>

          <div className="icons">
            <div className="first-row">
              <div className="homeicon">
                <h4>Home</h4>
								<img src={homeIcon} alt="" id="homeicon"/>
								<p>Return to homepage</p>
              </div>

              <div className="homeicon">
                <h4>Cog, Widget or Gear</h4>
								<img src={settingsIcon} alt="" id="settingsicon" />
								<p>Opens settings menu</p>
              </div>

              <div className="homeicon">
                <h4>Ellipsis</h4>
								<img src={ellipsisIcon} alt="" id="EllipsisIcon"/>
								<p>
								Reveal options related to what you are currently viewing.
								</p>
              </div>
                
            </div>

            <div className="sec-row">
              <div className="homeicon">
                <h4>Parallel Bars</h4>
								<img src={barIcon} alt="" id="BarIcon" />
								<p>
								 	Show a navigational bar to switch pages
								</p>
              </div>

              <div className="homeicon">
                <h4>Triangle pointing right</h4>
								<img src={playIcon} alt="" id="PlayIcon" />
								<p>
									Play video
								</p>
              </div>

              <div className="homeicon">
                <h4>Envelope</h4>
								<img src={envelopeIcon} alt="" id="EnvelopeIcon" />
								<p>
									Email, or "click here to contact us"
								</p>
              </div>
            </div>

            <div className="third-row">
              <div className="homeicon">
                <h4>Magnifying glass</h4>
								<img src={searchIcon} alt="" id="Searchicon" />
								<p>
									"Search", if you don't see asearch bar, click this icon
								</p>
              </div>

              <div className="homeicon">
                <h4>Circle Arrow</h4>
								<img src={refreshIcon} alt="" id="RefreshIcon" />
								<p>
									Refresh a page, press this when a website is not loading
								</p>
              </div>

              <div className="homeicon">
                <h4>Trash Bin</h4>
								<img src={binIcon} alt="" id="BinIcon" />
								<p>
									Delete an item
								</p>
              </div>
            </div>
          </div>



					<div class="fullWrapperRow"> 
						<center><h4>Share buttons</h4></center>
							<div class="sampleimage-container-2">
								<center>
									<img src={shareIcon1} alt="" id="shareIcon" />
									<img src={shareIcon2} alt="" id="shareIcon" />
									<img src={shareIcon3} alt="" id="shareIcon" />
								</center>
							</div>
							<p>
							Click on it and see a list of ways to post the content on social media or email
							</p>
					</div>

						<br />

						<div class="tips">
							<div className="tipsLeftDiv ">
								<img src={lightbulb} alt="" id="Lightbulb"/>
							</div>
							<div className="tipsrightDiv ">
								<p>
									Could you see the 3 parallel bars on the top right of the screen?
									<br />
									Try clicking it to open a navigation bar! Good job!
								</p>
							</div>
						</div>


				</div>

				<div class="termsTutorial">
					<b><u><h3>Common Terms :</h3></u></b>
					<p>
						Here are some terms that you can always see when using digital devices.
					</p>
					<br />
					<h4>Touch Screen</h4>
						<div class="sampleimage-container-2">
								<img src={touchscreen} alt="" id="Touchscreen" width="25%" height="25%"/>
						</div>
								<p>
								A touch screen is an electronic display screen that is also an input device. 
								<br />
								They are used on computer, tablet, smartphone or touch-controlled appliance like shopping kiosks.
								<br />
								Use them with hand gestures and fingertip movements to tap pictures, moving elements or type words on the screen.
								</p>
					<br />
					<h4>Bar code</h4>
						<div class="sampleimage-container-2">
								<img src={barcode} alt="" id="Barcode"  width="25%" height="25%"/>
						</div>
						<p>
									A barcode consists of bars and spaces, it is a machine-readable representation of numerals and characters.
									You can commonly see them on food packages, shopping reciepts etc.
									You can scan them using barcode scanners or mobile apps that can read barcode.
						</p>
						<u><a class="hyperlinks" href="https://en.wikipedia.org/wiki/Barcode">Credit: Wikipedia</a></u>
					<br /><br />
					<h4>QRcode</h4>
						<div class="sampleimage-container-2">
							<img src={qrcode} alt="" id="QRcode"  width="25%" height="25%"/>
						</div>
						<p>
								A quick response (QR) code is a type of barcode that can be read easily by a digital device and which stores information as a series of pixels in a square-shaped grid.
								You can commonly see them on posters or even menus so you can scan them using your mobile device camera to read a website or download an app.
						</p>

						<br /><br />
					<h4>Cookies</h4>
						<div class="sampleimage-container-2">
							<img src={cookie} alt="" id="Cookie"  width="25%" height="25%"/>
						</div>
						<p>
							A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time.
							Cookies let websites remember you, your website logins, give you relevant Ads etc. 
							But they can also be a treasure trove of private info for criminals to spy on.
						</p>
						<br /><br />
					<h4>hyperlink</h4>
						<p>
						In a website, a hyperlink (or link) is an item like a word or button that points to another location. When you click on a link, the link will take you to the target of the link, which may be a webpage, document or other online content. 
						They usually look like a line of blue colour text. Sometime they may appear like "Click here", instead of being displayed as a website name or address
						</p>

						<div class="tips">

							<div className="tipsLeftDiv ">
								<img src={lightbulb} alt="" id="Lightbulb"/>
							</div>

							<div className="tipsrightDiv ">
								<p>
									There are a few hyperlinks in this page! can you spot them? 
									<br />
									Try clicking or tapping on them and see what happens.
								</p>
							</div>

						</div>
				</div>
			</div>

			<div class="popquiz">
				<div className="tipsLeftDiv ">
					<h3>Pop-Quiz!</h3>
				</div>
				<div className="tipsrightDiv ">
					<p>
						Which of the following is the icon for "settings"? Choose it and see if you are right.
					</p>
				</div>
			

				{/* intend to have 3 divs: correctDIV, wrongDIV and Choose DIV.

				intend to have 3 icon imgs, 
				By default,chooseDIV is displayed while correctDIV and wrongDIV are hidden

				click settingsIcon and correctDIV will display, wrongDIV and chooseDIV are hidden.
				click the rest, and wrongDIV  will display,  correctDIV and chooseDIV are hidden. 
				
					tried different versions of codes, this one is the lastest one (also in quiz.js)
				*/}

				
					{/* function App() {
					const { correctVisible, wrongVisible, chooseVisible, handleImageClick } = MyComponent();

					return (
						<div>
						{chooseVisible && <div>ChooseDIV</div>}
						{correctVisible && <div>CorrectDIV</div>}
						{wrongVisible && <div>WrongDIV</div>}

						
						
						<img src={homeIcon} alt="Image 1" onClick={() => handleImageClick(false)} />
						<img src={playIcon} alt="Image 2" onClick={() => handleImageClick(false)} />
						<img src={settingsIcon} alt="Image 3" onClick={() => handleImageClick(true)} />
						</div>
					);
					}
				export default App; */}
			</div>

			

			





			
			<h2>Internet Access</h2>
			<br />
			<div id="internetIntro">
				<h3>Necessity of the Internet:</h3>
				<div id="internetIntroMiddle">
					<img src={internet} alt="" id="internet" />
					<p>
						The recent Covid-19 pandemic has clearly demonstrated that having stable internet access is no longer a <b>luxury</b>, but a <b>necessity</b> in
						today’s current society. The internet has become a vital tool for communicating with friends and family, finding work, and accessing helpful
						community resources etc.
					</p>
					<br />
					<p>
						For this reason, our website aims to help Govan residents gain access to the internet and provide resources on how to use it. The two easiest ways
						Govan residents will be able to access the internet will be through <b>mobile broadband</b> and <b>home broadband</b>.
					</p>
					<br />
				</div>
			</div>

			<div id="mobileBroadband">
				<h3>Mobile Broadband:</h3>
				<p>
					Mobile broadband allows for a wireless connection to the internet through your portable devices such as phones and tablets. This will allow you to
					access the internet anywhere outside or inside your home that has mobile broadband coverage. For example, mobile broadband will allow you to access
					the internet in most urban environments like cities and towns but will likely not work in the middle of the countryside due to lack of coverage.
				</p>
				<br />
				<p>
					You can purchase mobile broadband plans through various mobile network providers such as Three, EE, O2 and Vodafone, all of which have provide good
					coverage of the Govan area. These broadband plans will allow you to access the provider’s mobile network, allowing you to access the internet.
				</p>

				<div id="simCardContainer">
					<div id="threeSimCardContainer">
						<p>Example sim card below.</p>
						<img src={threeSimCard} alt="" id="threeSimCard" />
					</div>
					<p>
						If using a mobile phone, you will need to purchase the provider’s sim card and insert it into your device. For example, to access the Three (3)
						mobile network, you will need to have their sim card inserted into your device. These sim cards are usually very cheap. You will then need to
						purchase Three’s mobile broadband plan.
					</p>
				</div>
				<div id="mobileDataContainer">
					<div id="insertSimCardContainer">
						<p>Example of inserting sim card into mobile phone below.</p>
						<img src={insertSimCard} alt="" id="insertSimCard" />
					</div>
					<p>
						There are predominantly three generations of mobile network including 3G, 4G, and 5G. They differ mainly by the internet connection speeds they can
						reach. Most providers will offer 4G access with an optional 5G connection for an extra cost, with 3G now being phased out.
					</p>
				</div>

				<br />
				<img src={mobileData} alt="" id="mobileData" />

				<br />
				<br />
				<table id="mobilePlanTable">
					<caption>Mobile network provider’s such as Three will offer monthly contract and pay as you go plans.</caption>
					<thead>
						<tr>
							<th>
								<b>Monthly Contract:</b>
							</th>
							<th>
								<b>Pay as you go:</b>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>A monthly contract will involve the customer signing on to a contract lasting from 12-24 months, with a fixed monthly cost.</td>
							<td>This deal is exactly as it sounds and will involve the customer only paying for what they use.</td>
						</tr>
					</tbody>
				</table>
				<br />
				<p>
					Follow this link to find out more about the pros and cons of each plan:
					<a href="https://mobile.asda.com/scoop/pay-as-you-go-vs-phone-contracts#whatcontract" className="internetAccessLink">
						{" "}
						click here...
					</a>
				</p>
			</div>

			<br />
			<div id="storesGovan">
				<h3>Purchase phones and mobile broadband in Govan:</h3>
				<p>
					Phones and mobile broadband plans can be purchased from serval stores in the Govan area including Mira Phones, Hotspot, and Net Mobile. Feel free to
					ask for recommended phone and mobile broadband plan while at these stores based on your needs.
				</p>
				<div id="storeMapContainer">
					<br />
					<h4>Mira Phones:</h4>
					{/* Mira Phones */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10652.035418503261!2d-4.314303140971364!3d55.857207928938564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884671b6ce2657%3A0x304f438595b7b293!2sMira%20Phones!5e0!3m2!1sen!2suk!4v1686599877086!5m2!1sen!2suk"
						width="400"
						height="350"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<br />
					<h4>Net Mobile:</h4>
					{/* Net Mobile */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10652.534468498916!2d-4.322407827742681!3d55.855387563594896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888467a9decf661%3A0xda003a8fd081422f!2sNet%20Mobile!5e0!3m2!1sen!2suk!4v1686600331649!5m2!1sen!2suk"
						width="400"
						height="350"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<br />
					<h4>Hotspot:</h4>
					{/* Hotspot */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10651.914094600725!2d-4.330012077416613!3d55.85765047151314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888452920e76455%3A0x93b3e0586f2dadf6!2sHotspot!5e0!3m2!1sen!2suk!4v1686600289941!5m2!1sen!2suk"
						width="400"
						height="350"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<br />
				<img src={noSignal} alt="" id="noSignal" />
				<p>
					Govan residents may face an unfortunate issue of not being able to connect to their mobile network while inside of older buildings constructed with
					thick walls. This occurs as thick walls will block the signal of the mobile network from reaching the phone. The solution to this will be to step
					outside or find a section of the building where signal will reach the phone.
				</p>
			</div>

			<div id="homeBroadband">
				<h3>Home Broadband:</h3>
				<img src={router} alt="" id="router" />
				<p>
					Home broadband provides a fixed connection to the internet through a router set up in the home. A router (as seen in the picture on the left) will
					provide internet to multiple different devices in an area around the router wirelessly. The internet speeds provided by home broadband are generally
					much faster than mobile broadband. It is most commonly paid for on a monthly basis.
				</p>
				<br />
				<p>
					As of 2022, super-fast home broadband is available to 98% of Govan. The fastest provider is Virgin Media. See link which reviews all home broadband
					providers in Govan:
					<a href="https://fairinternetreport.com/United-Kingdom/Glasgow-City/Govan" className="internetAccessLink">
						click here...
					</a>
				</p>
			</div>

			<div id="freeAccess">
				<h3>Free access to internet in Govan: </h3>

				<p>
					In cases where purchasing broadband is unaffordable or impractical, Govan offers various options which will enable residents to access the internet
					for free.
				</p>
				<br />
				<h4>Elder Park Library: </h4>
				<p>
					The Elder Park Library is currently closed and under refurbishment. A £4 million investment has been committed to the restoration of the library to a
					modern and fit-for-purpose state. The library is planned to be re-opened sometime this summer in 2023. The website will be updated as soon as the
					library re-opens.
					<br />
					<br />
					The facilities of the library include <b>free internet</b> and <b>computer access</b> during open hours.
					<br />
					<b>Phone Number:</b> 0141 276 1540
					<br />
					<b>Email Address:</b> libraries@glasgowlife.org.uk
				</p>
				{/* Elder Park Library */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12667.5225494827!2d-4.3283682245783295!3d55.85706609650176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845e258d6c73f%3A0x5ea9098a79c48aab!2sElder%20Park%20Library!5e0!3m2!1sen!2suk!4v1686600510089!5m2!1sen!2suk"
					width="400"
					height="350"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				<p>
					Follow this link to find out more about the Elder Park Library:
					<a href="https://www.glasgowlife.org.uk/libraries/venues/elder-park-library" className="internetAccessLink">
						click here...
					</a>
				</p>
				<br />

				<h4>Ibrox Library: </h4>
				<p>
					The Ibrox library is currently open from Monday-Saturday and provides free access to the <b>internet</b> and <b>computer devices</b> during open
					hours.
					<br />
					<b>Phone Number:</b> 0141 276 0712
					<br />
					<b>Email Address:</b> libraries@glasgowlife.org.uk
				</p>
				{/* Ibrox Library */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2239.5645135128025!2d-4.304712595586104!3d55.85287153410921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884671a501e27b%3A0xdccd39a225dd2fdb!2sIbrox%20Library!5e0!3m2!1sen!2suk!4v1686600568087!5m2!1sen!2suk"
					width="400"
					height="350"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				<p>
					Follow this link to find out more about the Ibrox Library:
					<a href="https://www.glasgowlife.org.uk/libraries/venues/ibrox-library" className="internetAccessLink">
						{" "}
						click here...
					</a>
				</p>
			</div>
			<br />
			<div id="digitalLibraries">
				<h3>Free Access to Devices in Govan:</h3>
				<br />
				<h4>Govan Digital Lending Libraries Scheme:</h4>
				<img src={govanHousing} alt="" id="govanHousing" />

				<p>
					The <b>Govan Digital Lending Libraries</b> is a scheme that was launched by the Govan Housing Association during the Covid-19 pandemic. It was
					launched due to the massive shift from in-person to increasing digitisation concerning all aspects of life brought about by the lockdowns.{" "}
				</p>
				<br />
				<p>The stated aim of the project is…</p>
				<p>
					<i>
						“The project aims to increase access to devices and connectivity locally to individuals most excluded through the Covid-19 pandemic. We aim to
						provide partner organisations with technology, support, and training to allow them to operate their own lending libraries. Allowing them to reach
						those most in need.” – <b>Govan Housing Association</b>
					</i>
				</p>
				<br />
				<p>The scheme allows Govan residents to lend mobile phones, tablets, and laptops for an agreed period.</p>
				<br />
				<p>Govan community organisations that have received devices to lend include… </p>
				<ul>
					<li className="organisationList">Elderpark Housing Association</li>
					<li className="organisationList">Linthouse Housing Association</li>
					<li className="organisationList">Glasgow Life</li>
					<li className="organisationList">Plantation Productions</li>
					<li className="organisationList">Unlock Employment</li>
					<li className="organisationList">Gilded Lily</li>
					<li className="organisationList">Govan HELP</li>
					<li className="organisationList">Govan Youth Information Project</li>
					<li className="organisationList">Make Do and Grow</li>
					<li className="organisationList">NSPCC</li>
					<li className="organisationList">Aberlour</li>
					<li className="organisationList">Sunny Govan Radio Station</li>
					<li className="organisationList">The Glasgow Barons</li>
					<li className="organisationList">The Govan Stones</li>
					<li className="organisationList">Urban Roots</li>
					<li className="organisationList">The Preshal Trust</li>
				</ul>
				<br />
				<p>It is recommended to contact these organisations about the scheme. </p>
			</div>
			<br />













		<br />
			<br />
			<div class="physicalDigitalSupportStations">
				<div class="intro101">
						<h3>Still not sure what to do?</h3>
							<p>
								If you need someone to help you with digital stuff, there's more help!
								<br />
								Govan Community Project moved all their services,
								clubs and groups online with support from the
								<a href="https://www.scottishhousingnews.com/articles/scottish-tech-army-helps-asylum-seekers-in-govan-get-online"> Scottish Tech Army</a>. 
								Other organisations, such as the
								Govan Housing Association, facilitated
								<a href="https://dbgroupeurope.com/govan-digital-lending-libraries/"> digital lending libraries </a>
								and supplied devices, top ups on data and
								remote support to boost and educate people in digital
								skills to keep communities connected and keep
								services accessible.
							</p>
					</div>

					<div class="controlsTutorial">
						<b><u><h3>Digital support stations</h3></u></b>
						<p>
							Some <a href=""> organisations </a> 
							are working with us to provide digital support stations in different locations in Govan, if you have any problems
							with online services/ how to use a software, feel free to drop by and ask for help.
						</p>
						<br />
						<div class="mapbox">
							<div class="map-container">
								<h4> Digital support station A</h4>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.948813866993!2d-4.315075184065153!3d55.86355448058312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
								1!3m3!1m2!1s0x488845e0897f780d%3A0xe5f42a96585e5687!2sThe%20Pearce%20Institute!5e0!3m2!1sen!2suk!4v168625
								0935927!5m2!1sen!2suk" 
								width="98%" height="100%" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								<br />
							</div>
							<h4>Location: </h4> In front of the Pearce institute, 840-860 Govan Rd, Govan, Glasgow G51 3UU
							<h4>Opening times: </h4> Every Wednesday and Sunday, 10am-5pm
						</div>
						<br />
						<div class="mapbox">
							<div class="map-container">
								<h4>Digital support station B</h4>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17914.88170617939!2d-4.337326792282834!3d55.85641647804977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884676c115df5b%3A0xa1b8a7c3289ad382!2sGovan%20Town%20Hall!5e0!3m2!1sen!2suk!4v1686601997469!5m2!1sen!2suk" 
								width="98%" height="100%" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

								
								<br />
							</div>
							<h4>Location: </h4> Inside Govan Town Hall, Govan, Glasgow G51 2BT
							<h4>Opening times: </h4> Every Monday, Wednesday and Sunday, 9am-5pm
					</div>
				</div>
			</div>


		
				






						


			
			<BackToTop />

		</div>
		</div>
	);
};

export default Int;























