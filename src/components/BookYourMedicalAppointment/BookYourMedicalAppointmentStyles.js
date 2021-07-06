import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css"

export const ContainerAppointment = styled.div`
    width: 100%;
    background: ${Colors.textTitle};
    padding: 0 0 48px 0;
`;

export const TextareaAppointmentStyle = styled.textarea`
    width: 40%;
    height: 160px;
    box-sizing: border-box;
    background: ${Colors.code};
    color: ${Colors.lightLightLightGray};
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    outline: none;
    resize: none;
    border: none;
    padding: 16px;
    &::placeholder {
        color: ${Colors.lightLightLightGray};
    }

    @media (max-width: 740px){
        width: 72%;
    }

    @media (max-width: 415px){
        width: 92%;
        font-size: 14px;
    }
`;

export const BoxTextarea = styled.div`
    width: 100%;
    padding: 0;
    margin: 4px 0 0 0;
    display: flex;
    justify-content: center;
`;

export const BoxSend = styled.div`
    width: 100%;
    padding: 8px 0;
    margin: 4px 0 0 0;
    display: flex;
    justify-content: center;
`;