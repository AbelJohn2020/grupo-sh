import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const InkavidaNavbarStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px 0 16px 20px;
    background: ${Colors.inkavidaNavbar};

    @media (max-width: 768px){
        padding: 16px;
    }

    img {
        width: 20%;
        height: 100%;

        @media (max-width: 768px){
            width: 24%;
        }

        @media (max-width: 415px){
            width: 36%;
        }
    }
`;

export const ExternalInkavidaNavbarStyle = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 52px 0;
    background: ${Colors.lightLightGray};
`;