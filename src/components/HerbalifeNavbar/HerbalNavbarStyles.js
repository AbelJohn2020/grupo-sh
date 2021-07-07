import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const HerbalifeNavbarStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 22px 0 22px 20px;
    background: ${Colors.herbalifeNavbar};

    @media (max-width: 768px){
        padding: 16px;
    }

    img {
        width: 14%;
        height: 100%;

        @media (max-width: 768px){
            width: 24%;
        }

        @media (max-width: 415px){
            width: 36%;
        }
    }
`;

export const ExternalHerbalifeNavbarStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 52px 0;
    background: ${Colors.lightLightGray};
`;