import React from 'react';
import logo from '../../assets/img/logo/3AM.png'
import { Navbar, Nav, NavItem } from 'reactstrap';


import './Footer.css'
const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem className="foot">

          <h5>        <small>Copyright 2020 &copy; 3AMTeam<img src={logo} width="40px" height="40px"/>,  All Rights Reserved.</small></h5>

        </NavItem>
      </Nav>
    </Navbar> 
     
  );
};

export default Footer;
