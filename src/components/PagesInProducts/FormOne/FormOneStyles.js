import styled from "@emotion/styled";
import { Colors } from "../../UI/Colors";

export const Body = styled.div`
    background: ${Colors.lightLightLightGray};  
`;

export const BackgroundStyles = styled.div`
    padding: 0 10%;
    border-bottom: ${Colors.lightLightGray} solid 2px;
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
`;