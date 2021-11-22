import React, {useState} from 'react';
import classes from './Navbar.module.css';
import LOGO from '../../assets/images/Frame.png';
import { Menu } from '@material-ui/icons';
import { Dropdown } from 'react-bootstrap';


export const NavbarComp = () => {
  
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.navimg}>
        <img src={LOGO} width="80px"/>
      </div>
      <div>
              <ul className={classes.nav}>
                <li>
                <Dropdown>
                    <Dropdown.Toggle style={{backgroundColor: "transparent",border: "none"}}>
                      <Menu className={classes.menuBar}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
