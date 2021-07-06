import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import WelcomePicture from "../../images/logo-sh/descarga.jpg";
import "../UI/styles.css";

export const BoxWelcomeImage = styled.div`
    width: 100%;
    height: 558px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-image: url("${WelcomePicture}");
    background-size: cover;

    @media (max-width: 740px){
        height: 272px;        
    }

    @media (max-width: 415px){
        height: 160px;
    }
`;

export const WelcomeMessageStyles = styled.p`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: "Proxima Nova";
    font-weight: 600;
    letter-spacing: 0;
    font-style: normal;
    font-size: 24px;
    color: ${Colors.subtitle};

    @media (max-width: 740px){
        height: 740px;
        padding: 24px 0 0 0;
    }
`;

export const BoxWelcomeMessageStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 24px 10%;
    margin: 0;
    background: ${Colors.lightGray};
`;

export const GoToServices = styled.div`
    width: 100%;
    height: 100%;
    padding: 64px 56px;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media (max-width: 740px){
        padding: 24px;
    }

    @media (max-width: 415px){
        padding: 16px;
    }
`;