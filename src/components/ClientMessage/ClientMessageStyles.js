import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const ContainerMessage = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextareaMessage = styled.textarea`
    width: 100%;
    height: 72px;
    resize: none;
    margin: 0 0 8px 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.subtitle};
    border: ${Colors.bluetButton} solid 2px;
    border-radius: 4px;
    overflow-y: hidden;

    @media (max-width: 415px){
        height: 44px;
        font-size: 12px;
    }
`;

export const MaxLengthInMessage = styled.p`
    font-family: "Proxima Nova";
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 4px 0;
    padding: 0;
    color:${Colors.bluetButton};

    @media (max-width: 740px){
        font-size: 9px;
    }

    @media (max-width: 415px){
        font-size: 7px;
    }
`;