import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import kids from '../../assets/kids.jpg';
import { Header } from '../../containers';
import "./school.css";
import { TextReader } from "../../components";


import { BackToTop } from "../../components";
import { Invert } from "../../components";

const School = () => {
	return (
		<div className="school-container">
				<Header />
				<Invert />
			<TextReader />
			<div className="school-content">
				<h1 id="school-title">School Admission</h1>
				<img src={kids} alt="" className="kids" />
				<div className="school-content-heading">
					<h2>Learn more about schools in Govan on this page</h2>
					<h3>“Education is one thing no one can take away from you.”</h3>
				</div>
		
				<div className="school-content-list">
					<ul>
						<li>About IntoUniversity</li>
						<li>School in Govan</li>
						<li>School admissions and enrollment </li>
					</ul>
				</div>

				<div className="school-content-intouni">
					<p>IntoUniversity Govan provides local learning
						where young people are inspired to achieve.They 
						offer primary and secondary schools a programme
						of educational activites and workshops.
					</p>
				</div>
				

				
				<div class="map-container">	
					<h4>Visit some branches here:</h4>	
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.948813866993!2d-4.315075184065153!3d55.86355448058312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845e0897f780d%3A0xe5f42a96585e5687!2sThe%20Pearce%20Institute!5e0!3m2!1sen!2suk!4v1686250935927!5m2!1sen!2suk" width="400" height="350" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.545743354659!2d-4.297321224183253!3d55.887893981579055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845112312b923%3A0x50e43c2bfc45e80d!2sThe%20Maryhill%20Hub!5e0!3m2!1sen!2suk!4v1686402765457!5m2!1sen!2suk" width="400" height="350" style={{border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>

				<div className="school-content-findschools">
					<p>Don't know where to start looking for schools?</p>
					<p><a href="https://glasgow.infoisinfo.co.uk/search/school/b/govan">Click here</a></p>
				</div>
		
				<div className="school-content-tips">
				<p>Tips for School admsissions and enrollment </p>
					<ul>
						<li>1. Have all relevant documents ready </li>
						<li>2. Keep track of deadlines</li>
						<li>3. Attend opening days  </li>
						<li>4. Fill out all relevant forms  </li>
					</ul>
					<p><a href="https://www.glasgow.gov.uk/index.aspx?articleid=18426">Click here to start applying!</a></p>
				</div>	
			</div>
			<BackToTop />
		</div>
	);
};

export default School;
