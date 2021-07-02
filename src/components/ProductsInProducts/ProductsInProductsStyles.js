import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const CardProduct = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 18% 68% 14%;
    grid-template-rows: 100%;
    background: ${Colors.white};
    box-shadow: 4px 4px 4px 2px ${Colors.boxShadow};
`;

export const ImageProduct = styled.img`
    width: 92%;
    height: 100%;
`;

export const CenterInformation = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const NameProduct = styled.p`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    color: ${Colors.subtitle};
    padding: 16px 0 4px 0;
`;

export const CodeProduct = styled.p`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    color: ${Colors.code};
    padding: 4px 0;
`;

export const Buy = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;