import styled from 'styled-components';

import { FaRegCopy } from 'react-icons/fa';

export const LineBreak = styled.hr`
    border: 1px solid #2d2d2d;
    border-radius: 5px;
`;

export const EmailSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    height: 4.5rem;
    background-color: #1b1b1b;
    border: 1px solid #333333;
    border-radius: 5px;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;

    :hover {
        border: 1px solid #474747;
    }
`;

export const CallToAction = styled.span`
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;

    ${EmailSection}:hover & {
        font-size: 1.03rem;
        color: #bdbdbd;
    }
`;

export const EmailAddress = styled.a`
    margin-right: auto;
    font-size: 1.3rem;
    color: #9C9D9B;
    text-decoration: none;

    :hover {
        color: #7d7e7c;
    }
`;

export const CopyIcon = styled(FaRegCopy)`
    margin-left: auto;
    cursor: pointer;
    font-size: 1.1rem;

    :hover {
        color: #7d7e7c;
    }
`;




// @media screen and (max-width: 750px) {
//     .email-area {
//       padding: 1.2rem;
//     }
//     .contact-email {
//       font-size: 1rem;
//     }
//   }
  
//   .copy-email {
//     float: right;
//     font-size: 1.1rem;
//     cursor: pointer;
//   }
  
//   .copy-email:hover {
//     color: #7d7e7c;
//   }