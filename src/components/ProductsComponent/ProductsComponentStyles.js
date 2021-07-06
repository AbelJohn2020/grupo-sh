import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";

export const ListProductsStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 12% 64px 12%;
    border-bottom: ${Colors.lightLightGray} solid 2px;

    @media (max-width: 740px){
        padding: 0 8% 40px 8%;
    }

    @media (max-width: 415px){
        padding: 0 2% 40px 2%;
    }
`;