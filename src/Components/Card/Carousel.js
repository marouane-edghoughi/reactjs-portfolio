import React from 'react';
import Card from './Card';
import ReactDemo from '../../assets/images/reactdemo.png';
import SpringDemo from '../../assets/images/springdemo.png';
import AngularDemo from '../../assets/images/angulardemo.jfif';
import JavaDemo from '../../assets/images/javademo.png';
import { Container, Row } from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'React Demo',
                    subtitle: 'This is a demo of a React app.',
                    imgSrc: ReactDemo,
                    githubLink: '#',
                    previewLink: '#',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Spring Boot Demo',
                    subtitle: 'This is a demo of a Spring Boot app.',
                    imgSrc: SpringDemo,
                    githubLink: '#',
                    previewLink: '#',
                    selected: false,
                },{
                    id: 2,
                    title: 'Angular Demo',
                    subtitle: 'This is a demo of an Angular app.',
                    imgSrc: AngularDemo,
                    githubLink: '#',
                    previewLink: '#',
                    selected: false,
                },{
                    id: 3,
                    title: 'Java Demo',
                    subtitle: 'This is a demo of a Java app.',
                    imgSrc: JavaDemo,
                    githubLink: '#',
                    previewLink: '#',
                    selected: false,
                },
            ]
        }
    }
    handleCardClick = (id, Card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onMouseEnter={(e => this.handleCardClick(item.id, e))} onMouseLeave={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;