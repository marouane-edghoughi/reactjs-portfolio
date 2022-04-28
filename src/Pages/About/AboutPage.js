import React, { useEffect, useState } from 'react';
import {
    InternalLink,
    ExternalLink
} from '../../theme/globalStyles';

import useContentful from '../../hooks/useContentful';
import useDownload from '../../hooks/useDownload';

import { useTitle } from '../../Components/useTitle';
import Hero from '../../Components/Hero/Hero';
import Content from '../../Components/Content';
import {
    AboutMe,
    AvatarWrapper,
    AvatarImage,
    DefaultAvatar,
    AvatarSpinner,
    LineBreak,
    DownloadResumeButton,
    DownloadIcon,
    DownloadSpinner
} from './AboutPage.styled';
import Footer from '../../Components/Footer/Footer';

function AboutPage(props) {

    useTitle('About | Marouane Edghoughi')

    const { getAuthor } = useContentful()

    const [dev, setDev] = useState({})

    const fetchDev = () => {
        getAuthor().then((response) => {
            setDev(response)
        })
    }
    
    useEffect(() => {
        fetchDev()
    }, [])
    
    const { downloadResume } = useDownload();
    
    const [downloading, setDownloading] = useState(false)

    const downloadCV = () => {
        setDownloading(true)
        downloadResume(dev.resume?.fileName, dev.resume?.url).then(() => {
            setDownloading(false)
        }).catch((error) => {
            console.log(error)
            setDownloading(false)
        })
    }

    return(
        <>
            <Hero title={props.title} />
            <Content>
                <AboutMe>
                    <AvatarWrapper>
                        {dev.avatar ? (
                            <AvatarImage src={dev.avatar?.url} alt={dev?.name} />
                        ) : (
                            <DefaultAvatar>
                                <AvatarSpinner animation="border" size="sm"/>
                            </DefaultAvatar>
                        )}
                    </AvatarWrapper>
                    <p>Hi there! I'm Marouane Edghoughi, a Moroccan software engineer born and raised in <ExternalLink href='https://en.wikipedia.org/wiki/Casablanca' target="_blank" rel="noopener noreferrer">Casablanca</ExternalLink>. I graduated from the Higher School of Technology Casablanca with University Diploma in Technology in Software Engineering and Network Administration. My projects include backend development, RESTful API design and frontend development. I always focus on writing clean, elegant and efficient code.</p>
                    <p>In my spare time, I like to refine both my software engineering and communication skills.</p>
                    <p>I'm always down to hear about new projects, so feel free to <InternalLink to="/contact">drop me a line</InternalLink>.</p>
                    
                    <LineBreak />

                    <DownloadResumeButton
                        disabled={(!dev.resume ? true : false) || downloading}
                        onClick={() => downloadCV()}
                    >
                        Resume
                        {downloading ? (
                                <DownloadSpinner animation="border" size="sm"/>
                            ) : (
                                <DownloadIcon />
                        )}
                    </DownloadResumeButton>
                </AboutMe>
            </Content>
            <Footer/>
        </>
    );
}

export default AboutPage;