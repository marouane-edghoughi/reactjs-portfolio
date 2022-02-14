import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';
import { 
    AiFillGithub,
    AiFillLinkedin,
    AiFillHeart
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { GrReactjs } from 'react-icons/gr';

export const PageFooter = styled.footer`
    margin-top: 200px;
    background-color: #1b1b1b;
`;

export const CollabSection = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    background-image: linear-gradient(45deg, #384BEB, #8600DA);
    padding: 20px;
    border-radius: 30px;
    top: -50px;

    > h3 {
        color: #F3F2F3;
        font-size: 2rem;
        margin-right: auto;
    }
`;

export const ContactButton = styled.button`
    margin-left: auto;
    color: #F3F2F3;
    border: 2px solid #F3F2F3;
    background: transparent;
    padding: 10px 32px;
    font-weight: 500;
    border-radius: 24px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    float: right;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;

    :hover {
        color: #384BEB;
        background-color: #F3F2F3;
    }

    :focus {
        outline:0;
    }
`;

export const ContactIcon = styled(BsArrowRight)`
    margin-left: 10px;
    font-size: 1.3rem;
`;

export const Github = styled(AiFillGithub)`
    color: #9C9D9B;
    font-size: 25px;

    :hover {
        color: #7d7e7c;
    }
`;

export const Linkedin = styled(AiFillLinkedin)`
    color: #9C9D9B;
    font-size: 25px;

    :hover {
        color: #7d7e7c;
    }
`;

export const Email = styled(MdEmail)`
    color: #9C9D9B;
    font-size: 25px;

    :hover {
        color: #7d7e7c;
    }
`;

export const CopyrightSection = styled.div`
    display: flex;
    align-items: center;
    padding: 3rem;
`;

export const CopyrightsHeartIcon = styled(AiFillHeart)`
    color: #FF4033;
    font-size: 1rem;
`;

export const ReactIcon = styled(GrReactjs)`
    font-size: 1rem;
`;

export const PrivacyPolicy = styled(Link)`
    margin-left: auto;
    color: #2086e7;
    text-decoration: none;

    :hover {
        color: #066dcd;
    }
`;

// @media screen and (max-width: 960px) {
//     .floating-div {
//         padding: 15px 10px;
//     }

//     footer h3 {
//         font-size: 25px;
//     }

//     .contact {
//         font-size: 15px;
//         padding: 5px 16px;
//         float: left;
//     }

//     .footer-copy {
//         float: unset;
//         text-align: center;
//         margin-left: auto;
//         margin-right: auto;
//     }
// }

// @media screen and (max-width: 750px) {
//     footer {
//         padding-top: 50px;
//         margin-top: 100px;
//     }
//     .floating-div {
//         display: none !important;
//     }
// }