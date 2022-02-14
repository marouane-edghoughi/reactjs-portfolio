import styled, { keyframes } from 'styled-components';
import Typical from 'react-typical';

import { Col } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';

export const Greetings = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const JobTitle = styled(Col)`
    display: flex;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    // Disable selection
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */

    ::before {
        content: '{';
        margin-right: 2rem;
    }

    ::after {
        content: '}';
        margin-left: 2rem;
    }

    ::before, ::after {
        font-size: 1.3rem;
        font-weight: 600;
        background-clip: text;
        background-image: -webkit-linear-gradient(#384BEB, #8600DA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const TypicalAnimation = styled(Typical)`
    width: 14rem;
    margin-left: 1rem;
`;

export const ProjectsButton = styled.button`
    color: #F3F2F3;
    background-color: #384BEB;
    padding: 10px 32px;
    margin-right: 2rem;
    font-weight: 500;
    border-radius: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;

    :hover {
        background-color: #2d3cbc;
    }

    :focus {
        outline: 0;
    }
`;

export const EyeIcon = styled(AiOutlineEye)`
    margin-left: 10px;
    font-size: 1.3rem;
`;

export const ContactButton = styled.button`
    color: #F3F2F3;
    background-color: transparent;
    padding: 10px 32px;
    font-weight: 500;
    border: 1px solid #F3F2F3;
    border-radius: 24px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;

    :hover {
        color: #0f0f0f;
        background-color: #F3F2F3;
    }

    :focus {
        outline: 0;
    }
`;

const animation = keyframes`
    0% {
        transform: translateY(-0.5rem);
    }

    50% {
        transform: translateY(0.5rem);
    }

    100% {
        transform: translateY(-0.5rem);
    }
`;

export const TargetWrapper = styled(Col)`
    display: none;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1200px) {
        display: flex;
    }
`;

export const Target = styled.img`
    width: 20rem;
    height: fit-content;
    pointer-events: none;
    animation: ${animation} 3s linear infinite;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */

    @media only screen and (min-width: 320px) {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        display: block;
        width: 18rem;
    }

    @media only screen and (min-width: 1440px) {
        width: 20rem;
    }
`;

export const Copyrights = styled.p`
    text-align: center;
    z-index: 1 !important;
`;


// @media screen and (max-width: 960px) {
//     .download-resume {
//       padding: 7px 18px;
//       margin-right: 2rem;
//     }
  
//     .download-resume .download-icon {
//       margin-left: 8px;
//       font-size: 18px;
//     }
  
//     .see-projects {
//       padding: 7px 18px;
//       margin-right: 2rem;
//     }
  
//     .see-projects .eye-icon {
//       margin-left: 8px;
//       font-size: 18px;
//     }
  
//     .contact-me {
//       margin-top: 1rem;
//     }
//   }
  