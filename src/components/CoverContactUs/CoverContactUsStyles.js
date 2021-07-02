import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css"

export const ContactUsStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${Colors.lightGray};
    padding: 16px 0 116px 0;
`;

export const ContainerContact = styled.div`
    display: grid;
    grid-template-columns: 49.75% 0.5% 49.75%;
    grid-template-rows: 100%;
    background: ${Colors.lightLightLightGray};
    border: ${Colors.lightLightGray} solid 4px;
    margin: 24px 0 0 0;
`;

export const BoxServiceLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 64%;
    }
`;
    
export const BoxLogos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 0 48px 48px;
    background: ${Colors.shadow};
`;

export const BoxInformationContact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 48px 48px 56px;
    background: ${Colors.shadow};
    color: ${Colors.textTitle};

    @media (max-width: 740px){
        padding: 48px 32px 48px 40px;
    }
`;

export const LogoSHContact = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: ${Colors.gray};
    text-shadow: 1px 1px 2px ${Colors.welcomeTitle};
    margin: 0 0 0 4px;
    `;
    
export const LogoGroupContact = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 0 8px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: ${Colors.lightGray};
    border: ${Colors.redServices} solid 2px;
    box-shadow: 0 0 8px 2px ${Colors.secondBackgrounsWelcomeServices};
    text-shadow: 1px 1px 3px ${Colors.welcomeTitle};
`;

export const LogoPLusContact = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    margin: 0 0 92px 0;
`;

export const Line = styled.div`
    width: 100%;
    height: 100%;
    background: ${Colors.lightLightGray};
`;

export const Name = styled.h1`
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-size: 40px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 24px 0;

    @media (max-width: 740px){
        font-size: 28px;
    }
`;

export const NumberLocation = styled.h1`
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 24px 12px;

    @media (max-width: 740px){
        font-size: 24px;
    }
`;

export const Location = styled.h1`
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 4px 12px;

    @media (max-width: 740px){
        font-size: 24px;
    }
`;

export const Reference = styled.h1`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 24px 12px;

    @media (max-width: 740px){
        font-size: 24px;
    }
`;

export const Mail = styled.h1`
    width: 100%;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 24px 12px;

    @media (max-width: 740px){
        font-size: 16px;
        padding: 4px 0 0 0;
    }
`;

export const IconsPlusInformation = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 7% 93%;
    grid-template-rows: 100%;

    .iconsContact {
        padding: 7px 0 0 16px;
        font-size: 26px;

        @media (max-width: 740px){
            padding: 5px 0 0 0;
            font-size: 20px;
        }
    }
`;