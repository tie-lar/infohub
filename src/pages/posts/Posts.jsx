import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import {Navbar} from '../../components';
import { Header } from '../../containers';
import './posts.css';

import { BackToTop } from "../../components";
import { TextReader } from "../../components";
import { Invert } from "../../components";

const Posts = () => (
      <div className='posts-container'>
        <div className="header-cont">
          <Header />
          <Invert />
        </div>
        <TextReader />
        <h1>Posts</h1>
        <div className='posts-content' id='posts-content-top'>
            <div className='post' id='post'>
                <h2>Community Picnic</h2>
                <p>Monday 24th June 2023 @ 12PM</p>
                <p>Meet outside Albury Park</p>
                <br></br>
                <p>Bring sunscreen</p>
                <p>Bring your own snacks</p>
                <p>No alcohol or drugs</p>
                <p>Family friendly event</p>
                <br></br>
                <p>Contact number: 07957128986</p>
                <p>Organised by Sarah Pecaln</p>
            </div>

            {/** 
            <div className='post-1' id='post'></div>
            */}
          
        </div>

    
        <div className='posts-content' id='posts-content-top-2'>
            <div className='post-2' id='post'>
            <h2>Earth Day</h2>
                <p>Monday 22nd April 2024 @ 8AM</p>
                <p>Meet outside Bushville Library</p>
                <br></br>
                <p>Bring Litter pickers (if possible)</p>
                <p>Bring compostable bin bags</p>
                <p>Bring regular bin bags</p>
                <p>Bring a positive attitude</p>
                <br></br>
                <p>Contact number: 07965328326</p>
                <p>Organised by Hara Faefield</p>
            </div>
            
            {/**
              <div className='post-3' id='post'></div>
             */}
           
           <div className='direct-to-request'>
            <h2>Want to add a post?</h2>
            <p><Link to="/request">Click Me</Link></p>
           </div>
         
        </div>
      <BackToTop />
      </div>
   
  )

  export default Posts