import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from 'hamburger-react';

import LogoImage from '../../assets/images/logo.svg';
import {
    NavWrapper,
    Logo,
    HamburgerWrapper,
    NavMenu,
    NavLinks,
    NavLink,
    NavSocial,
    Github,
    Linkedin,
    Email
} from './Navbar.styled';

import './Navbar.css';


function Navbar() {

    const [isExpanded, setIsExpanded] = useState(false);

    // Show navigation menu
    const expandMenu = () => {
        setIsExpanded(!isExpanded);
    }

    // Close navigation menu on link click
    const RestoreMenuState = () => {
        if (isExpanded) {
            setIsExpanded(!isExpanded)
        }
    }

    const [menuSize, setMenuSize] = useState(30);

    // Set navigation menu icon's size based on screen size
    const updateMenuSize = () => {
        if(window.innerWidth <= 960) {
            setMenuSize(25)
        }
    }

    useEffect(() => {
        updateMenuSize();
    }, [])


    return(
        <nav className="sticky-top">
            <NavWrapper>
                <Link to="/">
                    <Logo
                        src={LogoImage}
                        alt="Marouane Edghoughi"
                    />
                </Link>
                <HamburgerWrapper>
                    <Hamburger
                        toggled={isExpanded}
                        toggle={expandMenu}
                        size={menuSize}
                        duration={0.6}
                        color="#F3F2F3"
                        rounded
                    />
                </HamburgerWrapper>
            </NavWrapper>
            <NavMenu className={isExpanded ? "nav-menu active" : "nav-menu"}>
                <NavLinks>
                    <NavLink to="/" onClick={RestoreMenuState} >Home</NavLink>
                    <NavLink to="/projects" onClick={RestoreMenuState} >Projects</NavLink>
                    <NavLink to="/about" onClick={RestoreMenuState} >About</NavLink>
                    <NavLink to="/contact" onClick={RestoreMenuState} >Contact</NavLink>
                </NavLinks>

                <NavSocial>
                    <a href="https://github.com/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                        <Linkedin />
                    </a>
                    <a href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer" >
                        <Email />
                    </a>
                </NavSocial>
            </NavMenu>
        </nav>
    );
}

export default Navbar;