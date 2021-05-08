import React from 'react';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Hamburger from 'hamburger-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

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
            <div className="nav-wrapper">
                <Link to="/"><img className="logo" src={Logo} alt="Marouane Edghoughi" /></Link>
                <span className="menu-icon">
                    <Hamburger
                        toggled={isExpanded}
                        toggle={expandMenu}
                        size={menuSize}
                        duration={0.6}
                        color="#F3F2F3"
                        rounded
                    />
                </span>
            </div>
            <div className={isExpanded ? "nav-menu active" : "nav-menu"}>
                <div className="nav-links">
                    <Link className="nav-link" to="/" onClick={RestoreMenuState} >Home</Link>
                    <Link className="nav-link" to="/projects" onClick={RestoreMenuState} >Projects</Link>
                    <Link className="nav-link" to="/about" onClick={RestoreMenuState} >About</Link>
                    <Link className="nav-link" to="/contact" onClick={RestoreMenuState} >Contact</Link>
                </div>

                <div className="nav-social-row">
                    <Row className="m-3">
                        <Col xs="auto">
                            <a href="https://github.com/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                                <AiFillGithub className="nav-social-icon" />
                            </a>
                        </Col>
                        <Col xs="auto">
                            <a href="https://www.linkedin.com/in/marouane-edghoughi/" target="_blank" rel="noopener noreferrer" >
                                <AiFillLinkedin className="nav-social-icon" />
                            </a>
                        </Col>
                        <Col xs="auto">
                            <a href="mailto:marouane@edghoughi.com" target="_blank" rel="noopener noreferrer" >
                                <MdEmail className="nav-social-icon" />
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;