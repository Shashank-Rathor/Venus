import React, {useState} from 'react';
import classes from './Navbar.module.css';
import LOGO from '../../assets/images/Frame.png';
import { Facebook, Instagram, LinkedIn, Menu, Twitter, YouTube } from '@material-ui/icons';
import { Dropdown } from 'react-bootstrap';
import HOME from '../../assets/images/icons/home.png';
import ABOUT from '../../assets/images/icons/about.png';
import PRODUCTS from '../../assets/images/icons/products.png';
import RESP from '../../assets/images/icons/responsibility.png';
import INVEST from '../../assets/images/icons/investors.png';
import SEARCH from '../../assets/images/icons/search.png';
import CONTACT from '../../assets/images/icons/search.png';
import MODAL from '../modal/modal';



export const NavbarComp = () => {
  
  const [open,setOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.navimg}>
        <img src={LOGO} width="80px"/>
      </div>
      <div>
              <ul className={classes.nav}>
                <li>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="link" bsPrefix="p-0" style={{backgroundColor: "transparent",border: "none",marginTop: "10px"}}>
                      <Menu className={classes.menuBar}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu  style={{borderRadius: "20px", padding: "20px", justifyContent: "center"}}>
                        <div className={classes.search}>
                          <img src={SEARCH}/>
                          <input type="text"/>
                        </div>
                      <Dropdown.Item href="#/action-1" style={{fontSize: "15px"}}>
                        <img src={HOME} className={classes.toggleMenu}/>
                        Home
                        </Dropdown.Item>
                      <Dropdown.Item href="#/action-2" style={{fontSize: "15px"}}>
                        <img src={ABOUT} className={classes.toggleMenu}/>  
                        About Us
                        </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{fontSize: "15px"}}>
                        <img src={PRODUCTS} className={classes.toggleMenu}/>
                        Products
                        </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{fontSize: "15px"}}>
                        <img src={RESP} className={classes.toggleMenu}/>
                        Resposibility
                        </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{fontSize: "15px"}}>
                        <img src={INVEST} className={classes.toggleMenu}/>
                        Investors
                        </Dropdown.Item>
                      <Dropdown.Item onClick={(e) => setOpen(true)}style={{fontSize: "15px"}}>
                      <img src={CONTACT} className={classes.toggleMenu}/>
                        Contact Us
                        </Dropdown.Item>
                        <hr/>
                        <div style={{display: "flex",justifyContent: "space-between"}}>
                          <Facebook style={{color: "#C4C4C4"}}/>
                          <Twitter style={{color: "#C4C4C4"}}/>
                          <YouTube style={{color: "#C4C4C4"}}/>
                          <Instagram style={{color: "#C4C4C4"}}/>
                          <LinkedIn style={{color: "#C4C4C4"}}/>
                        </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  {open ? <MODAL setOpen={setOpen}/> : null}
                </li>
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
