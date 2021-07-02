import React from 'react';
import servicesLogoSH from "../../images/logo-sh/servicesLogo.jpg";
import { HerbalifeProductsTitle } from '../Ttile/Title';
import Icons from '../UI/Icons';
import { BoxInformationContact, BoxLogos, BoxServiceLogo, ContactUsStyles, ContainerContact, IconsPlusInformation, Line, Location, LogoGroupContact, LogoPLusContact, LogoSHContact, Mail, Name, NumberLocation, Reference } from './CoverContactUsStyles';

function CoverContactUs() {
    return (
        <ContactUsStyles>
            <HerbalifeProductsTitle name="contáctanos aquí" />
            <ContainerContact>
                <BoxLogos>
                    <LogoPLusContact>
                        <LogoGroupContact>grupo<LogoSHContact>SH</LogoSHContact></LogoGroupContact>
                    </LogoPLusContact>
                    <BoxServiceLogo>
                        <img src={servicesLogoSH} alt="logo Services" />
                    </BoxServiceLogo>
                </BoxLogos>
                <Line></Line>
                <BoxInformationContact>
                    <Name>miguel solis huaman</Name>
                    <IconsPlusInformation>
                        <Icons type="whatsApp" className="iconsContact"/>
                        <NumberLocation>987 518 875</NumberLocation>
                    </IconsPlusInformation>
                    <IconsPlusInformation>
                        <Icons type="location" className="iconsContact"/>
                        <div>
                            <Location>sector 3 grupo 7 manzana f lote 24</Location>
                            <Reference>(Avenida Bolivar con Avenida Central, a una cuadra de UNTELS)</Reference>
                        </div>
                    </IconsPlusInformation>
                    <IconsPlusInformation>
                        <Icons type="mail" className="iconsContact"/>
                        <Mail>miguel.solis.huaman1972@gmail.com</Mail>
                    </IconsPlusInformation>
                </BoxInformationContact>
            </ContainerContact>
        </ContactUsStyles>
    );
}

export default CoverContactUs;