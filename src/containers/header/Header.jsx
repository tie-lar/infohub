import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {GiArrowCursor} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import './header.css';


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <div className='header-container'>
    <div className='bottom-navbar'> 
    <p>Click for More</p>
    {toggleMenu 
          ?  <RiCloseLine className='cross' color="#fff" size={20} onClick={() => setToggleMenu(false)} />
          : <GiArrowCursor className='arrow'color="#fff" size={20} onClick={() => setToggleMenu(true)} />}
    </div>

    {toggleMenu && (
                <div className='top-section'>
                      <ul>
                        <p><Link to="/internetaccess">Internet Access</Link></p>
                        <p><Link to="/schooladmission">School Admission</Link></p>
                        <p><Link to="/cybersecurity">Cybersecurity</Link></p>
                      </ul>
                </div>
            )}
    </div>
  )}

export default Header