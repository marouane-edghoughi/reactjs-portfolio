import styled from 'styled-components';

import { FiDownload } from 'react-icons/fi';
import {
    Spinner
} from 'react-bootstrap';

export const AvatarWrapper = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-180px);
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 50%;

    @media only screen and (min-width: 320px) {
        width: 7rem;
        height: 7rem;
    }

    @media only screen and (min-width: 425px) {
        width: 8rem;
        height: 8rem;
    }

    @media only screen and (min-width: 768px) {
        width: 10rem;
        height: 10rem;
    }

    @media only screen and (min-width: 2560px) {
        width: 12rem;
        height: 12rem;
    }
`;

export const AvatarImage = styled.img`
    width: auto;
    height: 100%;
    pointer-events: none;
`;

export const DefaultAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    background-color: #323232;
`;

export const AvatarSpinner = styled(Spinner)`
`;

export const AboutMe = styled.div`
    width: 100%;
    background-color: #1b1b1b;
    padding: 20px 20px;
    margin-top: 50px;
    padding-top: 100px;
    border-radius: 10px;
`;

export const LineBreak = styled.hr`
    border: 1px solid #424242;
    border-radius: 5px;
`;

export const DownloadResumeButton = styled.button`
    color: #F3F2F3;
    background: #384BEB;
    padding: 8px 26px;
    font-weight: 500;
    border-radius: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-right: 50px;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;

    :hover {
        background-color: #2d3cbc;
    }

    :focus {
        outline:0;
    }

    :disabled, [disabled] {
        background-color: #5764d8;
    }
`;

export const DownloadIcon = styled(FiDownload)`
    margin-left: 10px;
    font-size: 1.3rem;
`;

export const DownloadSpinner = styled(Spinner)`
    margin-left: 10px;
`;