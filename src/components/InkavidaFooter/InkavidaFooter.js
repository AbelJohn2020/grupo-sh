import React from 'react';
import LogoInkavidaGreen from "../../images/inkavida-logo.png";
// import LogoCCL from "../../images/herbalife-products-grupo-sh/Logo-CCL.jpg";
// import LogoCapevedi from "../../images/herbalife-products-grupo-sh/Capevedi-fin-2-NOMBRE-logo-inferior-izquierda.png";
// import LogoWfSDA from "../../images/herbalife-products-grupo-sh/sabes-que-es-y-cual-es-la-funcion-de-la-wfdsa-NOMBRE-logo-2.jpg";
import Icons from '../UI/Icons';
import { 
    ExternRightInformation,
    // FooterCenterLogoStyles, 
    // FooterLeftLogoStyles, 
    FooterStyles, 
    H5Styles, 
    Information, 
    LeftInformation, 
    LogoHerbalife, 
    // LogosFooterStyles, 
    RightInformation, 
    SocialNetworks, 
    SocialNetworksLinks, 
    // SpaceCLogosFooterStyles, 
    // SpaceLLogosFooterStyles, 
    // SpaceRLogosFooterStyles, 
    Termino, 
    Terminos
} from './InkavidaFooterStyles';
import "../UI/styles.css";

const InkavidaFooter = () => {
    return (
        <FooterStyles>
            <LeftInformation>
                <LogoHerbalife src={LogoInkavidaGreen} alt="Herbalife logo" />
                <Information>
                    Copyright ©2020 No está permitida la reproducción total o parcial sin la autorización por escrito. Todos los Derechos Reservados. Todos los productos, marcas y nombres comerciales que aparecen en este sitio, a menos que se indique lo contrario, son propiedad de Herbalife Internacional, Inc.
                </Information>
                {/* <LogosFooterStyles>
                    <SpaceLLogosFooterStyles>
                        <FooterLeftLogoStyles src={LogoCapevedi} alt="Logo CAPEVEDI" />
                    </SpaceLLogosFooterStyles>
                    <SpaceCLogosFooterStyles>
                        <FooterCenterLogoStyles src={LogoWfSDA} alt="Logo WfDSA" />
                    </SpaceCLogosFooterStyles>
                    <SpaceRLogosFooterStyles>
                        <FooterLeftLogoStyles src={LogoCCL} alt="Camara de Comercio" />
                    </SpaceRLogosFooterStyles>
                </LogosFooterStyles> */}
            </LeftInformation>
            <ExternRightInformation>
                <RightInformation>
                    <H5Styles>informacion</H5Styles>
                    <SocialNetworks>
                        <SocialNetworksLinks href="https://es-la.facebook.com/inkavidaglobaloficial/">
                            <Icons type="facebook" className="icon" />
                        </SocialNetworksLinks>
                        {/* <SocialNetworksLinks href="https://twitter.com/HerbalifeLatino">
                            <Icons type="twitter" className="icon" />
                        </SocialNetworksLinks> */}
                        <SocialNetworksLinks href="https://www.instagram.com/InkaVidaGlobal/">
                            <Icons type="instagram" className="icon" />
                        </SocialNetworksLinks>
                        <SocialNetworksLinks href="https://www.youtube.com/channel/UC4OXaEyRhTLnNyADKu568DA">
                            <Icons type="youtube" className="icon" />
                        </SocialNetworksLinks>
                    </SocialNetworks>
                    <Terminos>
                        <Termino>
                            Encuéntranos
                        </Termino>
                        <Termino>
                            Términos de uso
                        </Termino>
                        <Termino>
                            Políticas de privacidad
                        </Termino>
                        <Termino>
                            Herramientas de la web
                        </Termino>
                    </Terminos>
                </RightInformation>
            </ExternRightInformation>
        </FooterStyles>
    )
}

export default InkavidaFooter;