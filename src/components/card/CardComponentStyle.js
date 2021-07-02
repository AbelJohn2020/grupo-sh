import styled from "@emotion/styled";
import "../UI/styles.css";
import "../UI/global.css";
import { Colors } from "../UI/Colors";

export const MainCard = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 8px 16px;
    box-sizing: border-box;
`;

export const CardImage = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const ImageOfProducts = styled.img`
    width: 100%;
`;

export const Button = styled.div`
    margin: 12px 0 0 0;
    padding: 12px 28px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: ${Colors.greenButton} solid 3px;
    text-transform: uppercase;
    font-family: "Inter";
    font-weight: bold;
    font-style: normal;
    letter-spacing: 0.4px;
    font-size: 16px;
    background: ${Colors.greenButton};
    color: ${Colors.white};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${Colors.hoverGreenButton};
    }
`;