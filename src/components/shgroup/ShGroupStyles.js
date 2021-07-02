import styled from "@emotion/styled";
import Delivery from '../../images/default-delivery.jpg';
import Life from '../../images/default-life.jpg';
import { Colors } from "../UI/Colors";
import '../UI/styles.css'
import AboutUsCover from "../../images/logo-sh/vive_emprend.png"

export const ShGroupStyles = styled.div`
    width: 100%;
    background: ${Colors.lightLightLightGray};
    background-image: url("${AboutUsCover}");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    `;
    
export const ClearAbsolute = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 48px 0 0 0;
    flex-direction: column;
    align-items: center;
    background: ${Colors.backgrounsWelcomeServices};
`;

export const AboutUsStyles = styled.div`
    width: 80%;
    display: flex;
    margin: 8px 0 24px 0;
    border-radius: 12px;
`;

export const BoxUsStyles = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
`;

export const DivBoxUsStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;

    background: rgba(0, 0, 0, 0.24);
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-shadow: 4px 2px 8px ${Colors.shadowLetterAboutUs};
    color: white;

    @media (max-width: 740px){
        font-size: 16px;
    }
`;

export const LogoSH = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    color: ${Colors.gray};
    margin: 0 0 0 8px;

    @media (max-width: 740px){
        text-shadow: 1px 2px 4px ${Colors.black};
    }
`;

export const LogoGroup = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 0 8px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    text-transform: uppercase;
    color: ${Colors.lightGray};
    border: ${Colors.redServices} solid 4px;
    box-shadow: 0 0 8px 2px ${Colors.secondBackgrounsWelcomeServices};
    text-shadow: 2px 2px 8px ${Colors.black};

    @media (max-width: 740px){
        font-size: 32px;
        text-shadow: 1px 2px 4px ${Colors.black};
        margin: 0 0 8px 0;
    }
`;

export const LogoPLus = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 0 8px 0;
`;

export const BoxLifeStyles = styled.div`
    background-image: url(${Life});
    opacity: 0.7;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    @media (max-width: 740px){
        opacity: 0.85;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;

        background: rgba(0, 0, 0, 0.32);
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 4px 2px 8px ${Colors.shadowLetterAboutUs};
        color: white;

        @media (max-width: 740px){
            font-size: 16px;
            padding: 0 24px 0 48px;
        }

    }
`;

export const BoxDeliveryStyles = styled.div`
    background-image: url(${Delivery});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;

        background: rgba(0, 0, 0, 0.32);
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 4px 2px 8px ${Colors.shadowLetterAboutUs};
        color: white;


        @media (max-width: 740px){
            font-size: 16px;
            padding: 0 24px 0 48px;
        }
    }
`;

export const InformationStyles = styled.div`
    width: 50%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    `;
    
export const BoxInformationStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 120px 80px;
    background: ${Colors.backgrounsWelcomeServices};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    color: ${Colors.white};

    @media (max-width: 740px){
        padding: 48px 32px;
    }

    h1 {
        font-family: 'Proxima Nova';
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        margin: 0 0 8px 0;

        @media (max-width: 740px){
            font-size: 28px;
        }
    }

    p {
        font-family: 'Proxima Nova';
        font-size: 24px;
        font-style: normal;
        font-weight: 500;

        @media (max-width: 740px){
            font-size: 20px;
        }
    }
`;