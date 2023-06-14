import React, {useRef} from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import {Navbar} from '../../components';
import './contact.css';
import { Header } from '../../containers';
import { BackToTop } from "../../components";
import { TextReader } from "../../components";
import { Invert } from "../../components";



const Contact = () => {

  return (

      <div className='contact-container'>
        <div className="header-cont">
          <Header />
        </div>
        <TextReader />
        <div className='invert-page'>
          <Invert />
        </div>
        
        <h1>Get in touch</h1>
        <div className='contact-content'>
          <h2>Phone number</h2>
          <p>01794585936</p>

          <h2>Email Address</h2>
          <p>team59@uea.ac.uk</p>

          <h2>Address</h2>
          <p>UEA NR4 7TJ</p>
          {/*  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
              <button class="inverseColour" onclick="toggleInverse()"> Inverse Colour</button>*/}
             
        </div>
      <BackToTop />
      </div>
   
  )}

  export default Contact