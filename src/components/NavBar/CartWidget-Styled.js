import { Link } from "react-router-dom";
import styled from "styled-components";


export const CartIcon = styled(Link)`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;

    svg {
        color: #EEE;
        font-size: 2.5rem;
    }

    span {
        color: #fcbad3;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items:center;
        top: 7px;
        left: 8px;
        font-size: 12px;
        border-radius: 3px;
        font-weight: 600;
        padding: 1px 4px;
    }   
`