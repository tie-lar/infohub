import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo1.png';


//BEM -> Block Element Modifier


  const Menu2 = () => (
    <div className='menu2'>
      <p><Link to="/internetaccess">Internet Access</Link></p>
      <p><Link to="/schooladmission">School Admission</Link></p>
      <p><Link to="/cybersecurity">Cybersecurity</Link></p>
      <p><Link to="/posts">Posts</Link></p>
      <p><Link to="/request">Request to Post</Link></p>
      <p><Link to="/contact">Contact</Link></p>
    </div>
  )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ontrack__navbar'>
            <div className='ontrack__navbar-links'>
                <div className='ontrack__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>

            {/*Hamburger menu=true meaning the default view would be seeing the three lines, when clicked, it'll change to the cross icon*/}
            <div className='toggle_menu'> {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {/*If the menu is toggled then...*/}
            {toggleMenu && (
                <div className='ontrack__navbar-menu_container scale-up-center'>
                    <div className='ontrack__navbar-menu_container-links'>
                        <Menu2 />
                    </div>
                </div>
            )}

            </div>
        
    </div>
  );
};

export default Navbar;


