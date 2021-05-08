import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Content from '../Content';

import './Hero.css';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Content>
                <div className="py-5">
                    {props.title && <h1 className="hero-title">{props.title}</h1>}
                </div>
            </Content>
        </Jumbotron>
    );
}

export default Hero;