import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const NavbarServicesSH = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${Colors.lightLightLightGray};
    padding: 16px 24px;

    @media (max-width: 415px){
        padding: 12px 16px;
    }

    img {
        width: 16%;
        
        @media (max-width: 768px){
            width: 24%;
        }

        @media (max-width: 415px){
            width: 40%;
        }
    }

`;