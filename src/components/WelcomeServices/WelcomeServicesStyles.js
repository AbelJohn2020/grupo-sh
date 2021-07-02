import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Welcome from "../../images/logo-sh/Terapia-a-distancia.jpg"
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const CoverWelcome = styled.div`
    width: 100%;
    height: 640px;
    box-sizing: border-box;
    background-image: url("${Welcome}");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const OpacityCoverWelcome = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 11.6% 0 6.4% 0;
    background: ${Colors.backgrounsWelcomeServices};
    display: flex;
    align-itmes: center;
    justify-content: center;
`;

export const BoardCoverWelcome = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 0;
    background: ${Colors.secondBackgrounsWelcomeServices};
    display: flex;
    flex-direction: column;
`;

export const WelcomeTitleContent = styled.div`
    width: 100%;
    margin: 0 0 2.4% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const WelcomeTitle = styled.div`
    width: 100%;
    padding: 0 0 8px 0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: "Montserrat";
    font-weight: bold;
    font-style: normal;
    font-size: 70px;
    display: flex;
    justify-content: center;
`;

export const ColorTitle = styled.p(
    ({colorLetter}) => css`
        color: ${colorLetter};
        margin: 0 0 0 15px;
        padding: 0;
`)

export const ColorTitleRight = styled.p(
    ({colorLetter}) => css`
        color: ${colorLetter};
        margin: 0;
        padding: 0;
`)

export const TextTitle = styled.p`
    width: 100%;
    padding: 4px 0;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: "Proxima Nova";
    font-weight: bold;
    font-style: normal;
    font-size: 40px;
    color: ${Colors.textTitle};
`;

export const WelcomeButton = styled.div`
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;