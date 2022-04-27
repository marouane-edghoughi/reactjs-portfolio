import styled from 'styled-components';

import { FiDownload } from 'react-icons/fi';
import {
    Spinner
} from 'react-bootstrap';

export const AboutMe = styled.div`
    width: 100%;
    background-color: #1b1b1b;
    padding: 20px 20px;
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