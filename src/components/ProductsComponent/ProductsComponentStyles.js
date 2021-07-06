import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const ListProductsStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 12% 64px 12%;
    border-bottom: ${Colors.lightLightGray} solid 2px;

    @media (max-width: 740px){
        padding: 0 4% 40px 4%;
    }

    @media (max-width: 415px){
        padding: 0 8px 40px 8px;
    }
`;