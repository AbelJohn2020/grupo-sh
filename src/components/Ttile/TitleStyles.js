import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const ProductsTitleStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 16px 0;
    background: ${Colors.lightGray};
`;

export const ProductsSubtitleStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 16px 0;
`;

export const AppointmentTitleStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 16px 0;
    background: ${Colors.textTitle};
`;

export const AppointmentH2Styles = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: "Proxima Nova";
    font-weight: 700;
    letter-spacing: 0;
    font-style: normal;
    font-size: 30px;
    color: ${Colors.lightLightLightGray};

    @media (max-width: 768px){
        font-size: 26px;
    }

    @media (max-width: 415px){
        font-size: 20px;
    }
`;

export const ProductsDivStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 21px 0 56px 0;

    @media (max-width: 768px){
        padding: 8px 0 40px 0;
    }

    @media (max-width: 415px){
        padding: 4px 0 24px 0; 
    }
`;

export const ProductsH1Styles = styled.h1`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: "Proxima Nova";
    font-weight: 700;
    letter-spacing: 0;
    font-style: normal;
    font-size: 36px;
    color: ${Colors.title};

    @media (max-width: 768px){
        font-size: 30px;
    }

    @media (max-width: 415px){
        font-size: 20px;
    }
`;

export const ProductsH2Styles = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: "Proxima Nova";
    font-weight: 700;
    letter-spacing: 0;
    font-style: normal;
    font-size: 30px;
    color: ${Colors.subtitle};

    @media (max-width: 768px){
        font-size: 24px;
    }

    @media (max-width: 415px){
        font-size: 18px;
    }
`;

export const ProductsPStyles = styled.p`
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: "Proxima Nova";
    font-weight: 500;
    letter-spacing: 0;
    font-style: normal;
    font-size: 21px;
    color: ${Colors.subtitle};

    @media (max-width: 415px){
        font-size: 16px;
        padding: 0 8px;
    }
`;

export const ProductTitleStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 16px 0;
    background: ${Colors.lightLightLightGray};
`;

export const OurJobTitleStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 32px 0 20px 0;
    margin: 0 0 32px 0;
    background: ${Colors.lightGray};

    @media (max-width: 768px){
        padding: 24px 0 20px 0;
        margin: 0 0 20px 0;
    }
`;

export const OurJobMessageStyles = styled.p`
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    font-family: "Proxima Nova";
    font-weight: 600;
    letter-spacing: 0;
    font-style: normal;
    font-size: 32px;
    color: ${Colors.subtitle};
    
    @media (max-width: 768px){
        font-size: 20px;
        padding: 4px 16px 16px 16px;
    }

    @media (max-width: 415px){
        font-size: 16px;
    }
`;