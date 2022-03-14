import { Link } from 'react-router-dom';

import {
    Row,
    Col
} from 'react-bootstrap';

import { useTitle } from '../../Components/useTitle';
import { HeroTitle } from '../../Components/Hero/Hero.styled';
import Content from '../../Components/Content';
import { ExternalLink } from '../../theme/globalStyles';
import {
    Greetings,
    JobTitle,
    TypicalAnimation,
    ContactButton,
    EyeIcon,
    ProjectsButton,
    TargetWrapper,
    Target,
    Copyrights
} from './HomePage.styled';
import {
    ContactIcon,
    CopyrightsHeartIcon,
    ReactIcon
} from '../../Components/Footer/Footer.styled';
import ParticlesAnimation from '../../Components/ParticlesAnimation';

import TargetImage from '../../assets/images/target.png';

function HomePage(props) {

    useTitle('Marouane Edghoughi | Software Engineer')

    return(
        <>
            <Content>
                <Row>
                    <Col>
                        <Row className="py-5">
                            <Col sm={12}>
                                {props.greetings &&
                                    <Greetings>
                                        {props.greetings}
                                    </Greetings>
                                }
                            </Col>
                            <Col sm={12}>
                                {props.title &&
                                    <HeroTitle>
                                        {props.title}
                                    </HeroTitle>
                                }
                            </Col>
                            <JobTitle sm={12}>
                                <p>I'm a </p>
                                <TypicalAnimation
                                    loop={Infinity}
                                    wrapper="p"
                                    steps={[
                                        'Software Engineer 💻',
                                        3000,
                                        'Creative Programmer 🧠',
                                        3000,
                                        'Java Enthusiast ☕',
                                        3000
                                    ]}
                                />
                            </JobTitle>
                            <Col sm={12} className="mt-3">
                                <Link to='/projects'>
                                    <ProjectsButton>
                                        See Projects
                                        <EyeIcon />
                                    </ProjectsButton>
                                </Link>
                                <Link to='/contact'>
                                    <ContactButton>
                                        Contact me
                                        <ContactIcon />
                                    </ContactButton>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <TargetWrapper>
                        <Target
                            src={TargetImage}
                        />
                    </TargetWrapper>
                </Row>
            </Content>
            <Copyrights className='fixed-bottom'>
                &copy;{new Date().getFullYear()} Crafted with <CopyrightsHeartIcon /> and <ExternalLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" ><ReactIcon /> React</ExternalLink>
            </Copyrights>
            <ParticlesAnimation />
        </>
    );
}

export default HomePage;