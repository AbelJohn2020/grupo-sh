import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";

export const FooterStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px 0 80px 0;
`;

export const LeftInformation = styled.div`
    width: 38%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LogoHerbalife = styled.img`
    width: 24%;
`;

export const Information = styled.p`
    font-family: "Proxima Nova";
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    text-align: start;
    margin: 0 0 24px 0;
    line-height: 1.4;
`;

export const LogosFooterStyles = styled.div`
    width: 52%;
    height: 48px;
    display: flex;
    justify-content: space-between;
`;

export const SpaceLLogosFooterStyles = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    box-sizing: border-box;
`;

export const SpaceCLogosFooterStyles = styled.div`
    width: 24%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const SpaceRLogosFooterStyles = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const FooterLeftLogoStyles = styled.img`
    width: 100%;
    box-sizing: border-box;
`;

export const FooterCenterLogoStyles = styled.img`
    width: 80%;
    box-sizing: border-box;
`;

export const RightInformation = styled.div`
    width: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const ExternRightInformation = styled.div`
    width: 20%;
    display: flex;
    align-items: flex-start;
`;

export const H5Styles = styled.h5`
    color: ${Colors.subtitle};
    text-transform: uppercase;
    font-family: "Proxima Nova";
    margin: 0 0 12px 0;

`;

export const Termino = styled.p`
    font-family: "Proxima Nova";
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    text-align: start;
    margin: 0;
    padding: 0;
`;

export const Terminos = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0 0 0;
`;

export const SocialNetworks = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const SocialNetworksLinks = styled.a`
    width: 20%;
    height: 100%;
    background: ${Colors.socialNetworksBackground};
    border-radius: 4px;
    padding: 8px 8px 4px 8px;
    margin: 0 4px 0 0;
    color: ${Colors.subtitle};

    &:visited {
        color: ${Colors.subtitle};
    }

    &:active {
        color: ${Colors.herbalifeNavbar};
    }
`;