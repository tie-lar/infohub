import React from 'react';
import logo from '../../assets/blacklogo.png';
import govan2 from '../../assets/govan2.jpg';
import govan3 from '../../assets/govan3.jpg';
import openbook from '../../assets/openbook.png';
import phone from '../../assets/phone.mp4';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import {Navbar} from '../../components';
import './home.css';


import 'swiper/css';
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";


const Home = () => (
    <div className='home-container'>
      <div className='home-content'>
        {/*<h2>InfoHub was made to make it easier to access specific data. Here you'll find...</h2>*/}
      <Swiper
        effect={"creative"}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [],
          },
          next: {
            shadow: false,
            translate: [],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className='swiper_slide'>
        <SwiperSlide >
          <div className='bg-image'>
            <div className='logo-header'>
              <img src={logo} alt="" srcset="" />
              <div className='bg-shape-3'></div>
            </div>
           
              <div className='bg-shape-2'></div>
  
            <div className='bg-content-heading'>
              <h1>Guidance made Digital</h1>
              <img src={phone} alt="" />
            </div>

            <div className='bg-shape'></div>
            <div className='bg-content'>
              <button id='sec-btn-1'>Swipe Left</button>
            </div>
          </div>
           
           
        </SwiperSlide >
        <SwiperSlide >
          <div className='bg-image'>
           
            <div className='bg-content-heading-2'>
              <h1>What is InfoHub?</h1>
            </div>
            <div className='bg-shape-4'></div>
            <div className='bg-content'>
              <p>InfoHub is a mobile app, which doesn't require continue access to data to work.
                Within it you'll have access to guides on topics ranging from how to admit your 
                child to school, how to remain cyber aware online and information on accessing the internet.</p>
              <button id='sec-btn'>Swipe Left</button>
              <div className='bg-shape-3'></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className='bg-image'>
            <div className='bg-content-heading'>
              <h1>Features</h1>
            </div>
            <div className='bg-shape-4'></div>
            <div className='bg-content'>
            <p>Additional features you'll be able to do within the app is:
              <ul>
                <li>Reading other peoples posts</li>
                <li>Requesting to make a post</li>
                <li>Being able to use a screenreader, to read out selected text if necessary</li>
              </ul>
            </p>
              <button id='sec-btn-2'><Link to="/internetaccess">Enter App</Link></button>
              <div className='bg-shape-3'></div>
            </div>
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
        
        
      </div>
    </div>
)

  export default Home