import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const BuyButton = styled.button`
    border: ${Colors.bluetButton} solid 2px;
    background: ${Colors.bluetButton};
    color: ${Colors.white};
    font-family: "Proxima Nova";
    font-weight: bold;
    font-style: normal;
    font-size: 18px;
    padding: 8px 12px;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${Colors.white};
        color: ${Colors.bluetButton}
    }

    @media (max-width: 740px){
        font-size: 14px;
        padding: 6px 8px;
    }

    @media (max-width: 415px){
        font-size: 10px;
        padding: 4px 6px;
    }
`;

export const BuyLink = styled.a`
    border: ${Colors.bluetButton} solid 2px;
    background: ${Colors.bluetButton};
    color: ${Colors.white};
    font-family: "Proxima Nova";
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    padding: 4px 8px;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    text-decoration: none;

    @media (max-width: 740px){
        font-size: 10px;
        padding: 4px;
    }

    @media (max-width: 415px){
        font-size: 8px;
        padding: 2px;
    }

    &:hover {
        background: ${Colors.white} !important;
        color: ${Colors.bluetButton} !important;
    }

    &:visited {
        background: ${Colors.bluetButton};
        color: ${Colors.white};
    }

    &:active {
        color: ${Colors.subtitle} !important;
        border: ${Colors.subtitle} solid 2px !important;
    }
`;

export const ContactSession = styled.a`
    border: ${Colors.redServices} solid 2px;
    background: ${Colors.redServices};
    color: ${Colors.white};
    font-family: "Proxima Nova";
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    padding: 8px 16px;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    text-decoration: none;

    &:hover {
        background: ${Colors.white} !important;
        color: ${Colors.redServices} !important;
    }

    &:visited {
        background: ${Colors.redServices};
        color: ${Colors.white};
    }

    &:active {
        color: ${Colors.subtitle} !important;
        border: ${Colors.subtitle} solid 2px !important;
    }
    
    @media (max-width: 740px){
        font-size: 16px;
        padding: 6px 12px;
    }

    @media (max-width: 415px){
        font-size: 12px;
    }
`;

export const SendMyBookMedicalAppointmentStyles = styled.a`
    border: ${Colors.gray} solid 2px;
    background: ${Colors.gray};
    color: ${Colors.white};
    font-family: "Montserrat";
    letter-spacing: 1px;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    padding: 8px 48px;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    text-decoration: none;

    @media (max-width: 740px){
        font-size: 16px;
    }

    &:hover {
        background: ${Colors.white} !important;
        color: ${Colors.gray} !important;
    }

    &:visited {
        background: ${Colors.gray};
        color: ${Colors.white};
    }

    &:active {
        color: ${Colors.subtitle} !important;
        border: ${Colors.subtitle} solid 2px !important;
    }
`;