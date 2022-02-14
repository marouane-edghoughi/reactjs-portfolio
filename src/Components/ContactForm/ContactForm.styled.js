import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

export const FormControl = styled(Form.Control)`
    color: #8c8d8c !important;
    background-color: #1b1b1b !important;
    border-color: #333333 !important;

    :focus {
        border-color: #384BEB !important;
        box-shadow: 0 0 0 0.2rem rgba(21, 24, 216, 0.137) !important;
    }

    ${props => props.textarea && `
        min-height: 80px;
        max-height: 400px;
        white-space: pre-line;
    `}
`;

export const ErrorMessage = styled.div`
    width: 100%;
    color: #ff4949;
    font-size: 0.9rem;
    padding: 1px;
    padding-left: 10px;
    margin-top: 10px;
    border: 1px solid #ff4949;
    border-radius: 20px;
`;

export const SendButton = styled.button`
    display: inline-block;
    color: #F3F2F3;
    background: #384BEB;
    padding: 10px 32px;
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

    :disabled, [disabled] {
        background-color: #5764d8;
    }
`;

export const Arrow = styled(BsArrowRight)`
    margin-left: 10px;
    font-size: 1.3rem;
`;