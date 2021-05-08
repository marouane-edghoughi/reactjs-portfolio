import React from 'react';
import CardInfo from './CardInfo';

import './Card.css';

function Card(props) {

    return(
        <div className="d-inline-block p-card" onMouseEnter={(e) => props.onMouseEnter(props.item)} onMouseLeave={(e) => props.onMouseLeave(props.item)}>
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} glink={props.item.githubLink} plink={props.item.previewLink} /> }
            <div className="img-wrapper">
                <img className="img-responsive" src={props.item.imgSrc} alt={props.item.title} />
            </div>
        </div>
    );
}

export default Card;