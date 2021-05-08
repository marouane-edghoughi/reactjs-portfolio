import React from 'react';
import { useState, useEffect } from 'react';
import { animated } from 'react-spring';
import BarLoader from 'react-spinners/BarLoader';
import Logo from "../../assets/images/logo.svg";

import './Loader.css';

const LoadingScreen = (props) => {

    const [barLoaderStyle, setBarLoaderStyle] = useState(
        `
            display: block;
            margin: 0 auto;
            width: 150px;
            height: 2.5px;
        `
    );

    useEffect(() => {
        if (window.innerWidth < 960) {
            setBarLoaderStyle(
                `
                    display: block;
                    margin: 0 auto;
                    width: 110px;
                    height: 2.5px;
                `
            )
        }
    }, [])

    return (
        <animated.div className="loading-screen" style={props.style}>
            <div className="loader-wrapper">
                <img className="splash-logo" src={Logo} alt="Marouane Edghoughi" />
                <BarLoader color="#384BEB" css={ barLoaderStyle } loading={props.isLoading} />
            </div>
        </animated.div>
    );
}


export default LoadingScreen;
