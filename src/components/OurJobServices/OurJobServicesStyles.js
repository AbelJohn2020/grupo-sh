import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const ContainerImages = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${Colors.lightLightLightGray};
`;

export const OnlyImages = styled.div`
    width: 100%;
    margin: 0 0 24px 0;
    padding: 8px 88px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 50% 50%;

    @media (max-width: 415px){
        padding: 0 20px;
    }
`;

export const BoxImage = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 8px;
    
    @media (max-width: 415px){
        padding: 6px;
    }

    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 2px 2px 12px 2px ${Colors.Sweetgray};
    }
`;