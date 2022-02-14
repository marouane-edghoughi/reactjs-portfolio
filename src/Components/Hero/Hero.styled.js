import styled from 'styled-components';
// import { device } from '../breakpoints';

export const Jumbotron = styled.div`
    padding: 2rem 0;
    margin-bottom: 2rem;
    border-radius: .3rem;
`;

export const HeroTitle = styled.h1`
    font-size: /*50px*/ 3rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #F3F2F3;

    @media only screen and (min-width: 320px) {
        font-size: 2.5rem;
    }

    @media only screen and (min-width: 425px) {
        font-size: 3rem;
    }

    @media only screen and (min-width: 768px) {
        font-size: 3.2rem;
    }

    @media only screen and (min-width: 2560px) {
        font-size: 3.5rem;
    }
`;