import styled from "@emotion/styled";
import Certificate from '../../images/default-certificate.jpg';
import Delivery from '../../images/default-delivery.jpg';
import Life from '../../images/default-life.jpg';
import '../UI/styles.css'

export const ShGroupStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0 0 0;
`;

export const AboutUsStyles = styled.div`
    width: 80%;
    display: flex;
    margin: 8px 0 24px 0;
    border-radius: 12px;

    &:hover {
        box-shadow: 4px 4px 24px 4px rgba(0, 0, 0, 0.56);
        margin: 0 0 40px 0;
    }
`;

export const BoxUsStyles = styled.div`
    background-image: url(${Certificate});
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

        background: rgba(0, 0, 0, 0.16);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 4px 2px 8px rgba(0, 0, 0, 0.64);
        color: white;

    }
`;

export const BoxLifeStyles = styled.div`
    background-image: url(${Life});
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

        background: rgba(0, 0, 0, 0.16);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 4px 2px 8px rgba(0, 0, 0, 0.64);
        color: white;

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

        background: rgba(0, 0, 0, 0.16);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        text-shadow: 4px 2px 8px rgba(0, 0, 0, 0.64);
        color: white;

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
    background: rgba(240, 40, 40, 0.72);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    h1 {
        font-family: 'Inter';
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
    }

    p {
        text-align: justify;
        font-family: 'Piazzolla';
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
`;