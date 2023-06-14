import React, {useRef} from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import {Navbar} from '../../components';
import { Header } from '../../containers';
import emailjs from '@emailjs/browser';
import './request.css';

import { BackToTop } from "../../components";
import { TextReader } from "../../components";
import { Invert } from "../../components";


/*LAST THING TO ADD TO THIS PAGE, IS A JAVASCRIPT POP UP TELLING THE USER
THEIR REQUEST HAS BEEN SENT SUCCESSFULLY*/ 


const Request = () => {
    
  const form = useRef();

    const handleSubmit = e => {
        /*e.preventDefault();*/


        emailjs.sendForm('service_z1eymcu', 'template_5onselj', form.current, '9ItyXvk8Jl0W3V6Mw')
        .then((result) => {
            console.log(result.text);
            console.log("Post pending approval")
        }, (error) => {
            console.log(error.text);
        });
        console.log('Form submitted');
    };
  return (
    
      <div className='request-container'>
        <div className="header-cont">
          <Header />
          <div className='invert-page'>
            <Invert />
        </div>
        </div>
        <TextReader />
          <h1 id='request-heading-title'>Would you like to add a post to the application?</h1>
          <h2 id='connected'>Please make sure you're connected to internet</h2>
        <div className='request-content'>
          <div className='request-post'>
            <form ref={form} onSubmit={handleSubmit} >
              <h2>Fill in the form below, and if approved you'll find your post on the posts page</h2>
              <label htmlFor="">What is your name?</label>
                <input type="text"name="user_name"  required placeholder='Enter your name here'/>

                <label htmlFor="">What is your number?</label>
                <input type="phone" name="user_number" required placeholder='Enter your phone number here'/>
                
                <label htmlFor="">What type of post would you like to submit?</label>
                <input type="text" name="type_post" required placeholder='Enter your post type here'/>

                <label htmlFor="">What details are necessary to know?</label>
                <textarea name="message" id="details-to-know" cols="41" rows="14" placeholder='Enter necessary information here, otherwise N/A'></textarea>

                <button type='submit' value="send">Submit</button>
            </form>
          </div>
        </div>
      <BackToTop />
      </div>
   
  )}

  export default Request