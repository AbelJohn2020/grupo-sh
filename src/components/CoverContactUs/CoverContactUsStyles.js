import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

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

    @media (max-width: 415px){
        display: flex;
        flex-direction: column;
        padding: 24px 0 82px 0;
    }
`;

export const BoxServiceLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media (max-width: 415px){
        justify-content: flex-end;
        align-items: flex-start;
    }
    
    img {
        width: 64%;
        
        @media (max-width: 415px){
            margin: 0 24px 0 0;
            width: 72%;
        }
    }
`;
    
export const BoxLogos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 0 48px 48px;
    background: ${Colors.shadow};

    @media (max-width: 415px){
        padding: 24px 0 0 24px;
        display: grid;
        grid-template-columns: 50% 50%;
        height: 40px;
    }
`;

export const BoxInformationContact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 48px 48px 56px;
    background: ${Colors.shadow};
    color: ${Colors.textTitle};

    @media (max-width: 768px){
        padding: 48px 32px 48px 40px;
    }

    @media (max-width: 415px){
        padding: 24px 24px 0 24px;
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

    @media (max-width: 415px){
        font-size: 20px;
    }
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

    @media (max-width: 415px){
        font-size: 20px;
    }
`;

export const LogoPLusContact = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    margin: 0 0 92px 0;

    @media (max-width: 415px){
        margin: 0 0 10px 0;
    }
    
`;

export const Line = styled.div`
    width: 100%;
    height: 100%;
    background: ${Colors.lightLightGray};

    @media (max-width: 415px){
        display: none;
    }
`;

export const Name = styled.h1`
    text-transform: capitalize;
    font-family: "Proxima Nova";
    font-size: 40px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 24px 0;

    @media (max-width: 768px){
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

    @media (max-width: 768px){
        font-size: 24px;
    }

    @media (max-width: 415px){
        margin: 0 0 24px 8px;
    }
`;

export const Location = styled.h1`
    text-transform: capitalize;
    box-sizing: border-box;
    font-family: "Proxima Nova";
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    margin: 0 0 4px 12px;

    @media (max-width: 768px){
        font-size: 24px;
    }

    @media (max-width: 415px){
        margin: 0 0 4px 8px;
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

    @media (max-width: 768px){
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

    @media (max-width: 768px){
        font-size: 16px;
        padding: 4px 0 0 0;
    }

    @media (max-width: 415px){
        padding: 8px 0 0 0;
        margin: 0 0 24px 8px;
        font-size: 16px;
    }
`;

export const IconsPlusInformation = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100%;

    @media (max-width: 415px){
        grid-template-columns: 12% 88%;
    }

    .iconLink {
        background: transparent;
        padding: 2px 0 0 16px;
        border: none;
        border-radius: 100px;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        
        &:visited {
            background: ${Colors.textTitle};
            color: ${Colors.transparent};
        }

        @media (max-width: 415px){
            padding: 2px 0 0 8px;
        }
    }

    .iconLinkMail {
        background: transparent;
        padding: 2px 0 0 16px;
        border: none;
        border-radius: 100px;
        outline: none;
        text-decoration: none;
        cursor: auto;
        
        &:visited {
            background: ${Colors.textTitle};
            color: ${Colors.transparent};
        }

        @media (max-width: 415px){
            padding: 2px 0 0 8px;
        }
    }

    .iconsContact {
        font-size: 26px;
        padding: 8px;

        &:hover {
            border-radius: 100px;
            color: ${Colors.redServices};
            box-shadow: 1px 1px 4px 1px ${Colors.backgrounsWelcomeServices};
        }

        @media (max-width: 768px){
            padding: 5px 0 0 0;
            font-size: 20px;
        }
    }

    .iconMail {
        font-size: 26px;
        padding: 8px;

        @media (max-width: 768px){
            padding: 5px 0 0 0;
            font-size: 20px;
        }

        
    }

`;