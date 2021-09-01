import React, { Component } from 'react'
import NavItems from "./NavItems";

import "./Navbar.css";
import {animateScroll as scroll, Link } from'react-scroll';
import { Link as LinkR}  from 'react-router-dom';


class Navbar extends Component {
  render() {

    const toggleHome = () => {
      scroll.scrollToBottom();
    }
    return (
      <>
        <nav className="navbar-items">
          <LinkR to="/"  className="logo">
            EP
          </LinkR>
          <ul>
            <LinkR to="/" className="nav-links">Home</LinkR>
            {NavItems.map((item, index) => {
              return (
                // <li><a className={item.cName} href={item.url}>
                //   {item.name} {item.icon}
                // </a></li>
              
                <Link to={item.path} 
                className={item.cName}
                smooth={true} 
                duration={1000}
                spy={true}
                exact={true}
                // offset={60}
                >
                  {item.name}
                </Link>
              
              )
            })}
          </ul>

        </nav>
      </>
    )
  }
}

export default Navbar;
