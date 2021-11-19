import React from 'react';
import classes from './Navbar.module.css';
import LOGO from '../../assets/images/Frame.png';

export const NavbarComp = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.navimg}>
        <img src={LOGO} width="80px"/>
      </div>
      <div>
              <ul className={classes.nav}>
                <li><a href="#">AMR</a></li>
                <li><a href="#">Researchers</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Business Development</a></li>
                <li><a href="#">News & Media</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>
    </div>
  )
}
