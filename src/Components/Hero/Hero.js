import React from 'react';
import { 
    Jumbotron,
    HeroTitle
} from './Hero.styled';
import Content from '../Content';

function Hero(props) {
    return(
        <Jumbotron className="jumbotron-fluid p-0">
            <Content>
                <div className="py-5">
                    {props.title && 
                        <HeroTitle className="hero-title">
                            {props.title}
                        </HeroTitle>
                    }
                </div>
            </Content>
        </Jumbotron>
    );
}

export default Hero;