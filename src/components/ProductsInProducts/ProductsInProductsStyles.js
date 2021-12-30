import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const CardProduct = styled.div(({buy}) => css`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${buy === false ? "8px 0 136px 0" : "8px 0 52px 0"};

    @media (max-width: 420px){
        padding: ${buy === false ? "8px 0 106.5px 0" : "8px 0 48px 0"};
    }
`);

export const CardImageProduct = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const ImageProduct = styled.img`
    width: 72%;

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const CenterInformation = styled.div`
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;

    @media (max-width: 415px){
        padding: 4px 8px;
    }
`;

export const NameProduct = styled.p`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    color: ${Colors.subtitle};
    padding: 16px 0 4px 0;

    @media (max-width: 415px){
        padding: 4px 0;
        font-size: 14px;
    }
`;

export const CodeProduct = styled.p`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    color: ${Colors.code};
    padding: 4px 0;

    @media (max-width: 415px){
        font-size: 14px;
    }
`;

export const Buy = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        padding: 16px 8px 16px 0;
    }

    @media (max-width: 737px){
        padding: 2px;
    }

    @media (max-width: 415px){
        padding: 4px 4px 4px 0;
    }
`;

export const SocialLinks = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 6px 0 0 0;
`;

export const SocialLink = styled.a`
    background: ${Colors.socialNetworksBackground};
    border-radius: 4px;
    padding: 8px 8px 4px 8px;
    margin: 0 6px;
    color: ${Colors.subtitle};
    outline: none;

    &:visited {
        color: ${Colors.subtitle};
    }

    &:active {
        color: ${Colors.herbalifeNavbar};
    }

    @media (max-width: 415px){
        margin: 0 6px 16px 6px;
    }
`;