import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const Logo = styled.img`
    position: absolute;
    margin-left: 10vw;
    width: 70px;
    top: 0;
    left: 0;
    transform: translate(25%, 40%);
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none; /* Safari 3.1+ */
    -moz-user-select: none; /* Firefox 2+ */
    -ms-user-select: none; /* IE 10+ */
`;

export const NavWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: rgba(23, 23, 23, 0.90);
    border-bottom: 1px solid rgba(51, 51, 51, 0.90);
    z-index: 2;
`;

export const HamburgerWrapper = styled.span`
    position: absolute;
    margin-right: 10vw;
    top: 0;
    right: 0;
    transform: translate(-25%, 25%);
    cursor: pointer;
    justify-self: end;
`;

export const NavMenu = styled.div`

`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`;

export const NavLink = styled(Link)`
    width: fit-content;
    color: #F3F2F3;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-decoration: none;

    :hover {
        color: #F3F2F3;
    }
`;

export const NavSocial = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    bottom: 100px;
`;

export const Github = styled(AiFillGithub)`
    color: #9C9D9B;
    font-size: 1.5rem;

    :hover {
        color: #7d7e7c;
    }
`;

export const Linkedin = styled(AiFillLinkedin)`
    color: #9C9D9B;
    font-size: 1.5rem;

    :hover {
        color: #7d7e7c;
    }
`;

export const Email = styled(MdEmail)`
    color: #9C9D9B;
    font-size: 1.5rem;

    :hover {
        color: #7d7e7c;
    }
`;