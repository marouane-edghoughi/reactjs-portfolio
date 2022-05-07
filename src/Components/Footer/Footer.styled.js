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
    background: -moz-linear-gradient(45deg, #384BEB, #8600DA);
    background: -webkit-linear-gradient(45deg, #384BEB, #8600DA);
    background-image:
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23eaeaea' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E"),
        linear-gradient(45deg, #384BEB, #8600DA)
    ;
    padding: 20px;
    border-radius: 30px;
    top: -50px;

    > h3 {
        color: #F3F2F3;
        font-size: 2rem;
        margin-right: auto;
    }

    @media only screen and (min-width: 320px) {
        max-width: 90%;
        padding: 10px;

        > h3 {
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 425px) {
        max-width: 90%;
        padding: 10px;
        flex-direction: column;

        > h3 {
            font-size: 1.8rem;
        }
    }

    @media only screen and (min-width: 768px) {
        max-width: 80%;
        padding: 20px;
        flex-direction: row;

        > h3 {
            font-size: 2rem;
        }
    }
`;

export const ContactButton = styled.button`
    margin-left: auto;
    color: #F3F2F3;
    border: 2px solid #F3F2F3;
    background: transparent;
    padding: 10px 32px;
    font-weight: 500;
    font-size: 1rem;
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

    @media only screen and (min-width: 320px) {
        font-size: 0.8rem;
        padding: 5px 16px;
    }

    @media only screen and (min-width: 425px) {
        font-size: 0.9rem;
        padding: 8px 28px;
    }

    @media only screen and (min-width: 768px) {
        font-size: 1rem;
        padding: 10px 32px;
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