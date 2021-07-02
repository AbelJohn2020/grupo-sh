import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import '../UI/styles.css'

export const NavbarStyles = styled.div`
    width: 100%;
    padding: 16px 32px 16px 24px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${Colors.lightWhite};
    
    img {
        width: 9%;

        @media (max-width: 740px){
            width: 18%;       
        }
    }

    @media (max-width: 740px){
        padding: 16px 16px 16px 24px;       
    }
`;

export const OptionsStyles = styled.div`
    display: flex;
`;