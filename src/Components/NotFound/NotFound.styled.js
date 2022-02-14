import styled from 'styled-components';

import { device } from '../breakpoints';
import { BiHomeAlt } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';

export const BackHome = styled.button`
    color: #F3F2F3;
    background-color: transparent;
    padding: 8px 26px;
    font-weight: 500;
    border: 1px solid #F3F2F3;
    border-radius: 24px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;

    :hover {
        color: #0f0f0f;
        background-color: #F3F2F3;
    }

    :focus {
        outline:0;
    }

    @media only screen and ${device.mobile} {
        border-radius: 10px;
    }
`;

export const Home = styled(BiHomeAlt)`
    margin-right: 10px;
    font-size: 1.3rem;
`;