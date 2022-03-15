import styled from 'styled-components';
import { animated } from 'react-spring';

import Button from 'react-bootstrap/Button';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 18rem;
    height: 18rem;
    margin: 20px;
    border-radius: 25px;
    overflow: hidden;
`;

export const ProjectImage = styled.img`
    flex: none;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
`;

export const ProjectDataWrapper = styled(animated.div)`
    position: absolute;
    padding: 20px;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 6, 8, 0.8);
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
`;

export const ProjectTitle = styled.h2`
    font-size: 1.5em;
    color: #F3F2F3;
`;

export const ProjectDescription = styled.p`
    font-size: 16px;
    margin: 0px;
`;

export const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    bottom: 10px;

    > a {
        text-decoration: none;
    }
`;

export const ProjectButton = styled(Button)`
    display: flex;
    align-items: center;
    text-underline-offset: unset !important;
    font-size: 0.9rem;
`;

export const Github = styled(AiFillGithub)`
    margin-right: 5px;
`;

export const PreviewIcon = styled(HiOutlineExternalLink)`
    margin-right: 5px;
`;