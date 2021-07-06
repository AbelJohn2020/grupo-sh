import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";

export const HerbalifeNavbarStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 22px 0 22px 20px;
    background: ${Colors.herbalifeNavbar};

    @media (max-width: 740px){
        padding: 16px;
    }

    img {
        width: 14%;
        height: 100%;

        @media (max-width: 740px){
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