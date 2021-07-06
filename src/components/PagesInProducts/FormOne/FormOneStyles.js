import styled from "@emotion/styled";
import { Colors } from "../../UI/Colors";
import "../../UI/styles.css";

export const Body = styled.div`
    background: ${Colors.lightLightLightGray};  
`;

export const BackgroundStyles = styled.div`
    padding: 0 10%;
    border-bottom: ${Colors.lightLightGray} solid 2px;

    @media (max-width: 740px){
        padding: 0 2%;
    }
`;

export const AllProductsBySector = styled.div`
    width: 100%;
    margin: 16px 0 0 0;
    padding: 0 0 24px 0;
    box-sizing: border-box;
`; 

export const OneProductOfTheSector = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 170px;
    padding: 0 30px;
    margin: 0 0 12px 0;

    @media (max-width: 740px){
        height: 136px;
    }

    @media (max-width: 415px){
        padding: 0 8px;
        height: 96px;
    }
`;