import React from 'react';
import { useSpring, animated } from 'react-spring';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Row, Col, Button } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';

import './Card.css';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="p-card-info" style={style}>
            <p className="p-card-title">{props.title}</p>
            <p className="p-card-subtitle">{props.subtitle}</p>
            <Row className="p-card-links">
                <Col xs={6}>
                    <a className="link" href={props.glink} target="_blank" rel="noopener noreferrer">
                        <Button variant="light" block>
                            <AiFillGithub />
                            View code
                        </Button>
                    </a>
                </Col>
                <Col xs={6}>
                    <a className="link" href={props.plink} target="_blank" rel="noopener noreferrer">
                        <Button variant="light" block>
                            <HiOutlineExternalLink />
                            Preview
                        </Button>
                    </a>
                </Col>
            </Row>
        </animated.div>
    );
}

export default CardInfo;