import React from 'react';
import servicesLogoSH from "../../images/logo-sh/servicesLogo.jpg";
import { ProductsTitle } from '../Ttile/Title';
import Icons from '../UI/Icons';
import { BoxInformationContact, BoxLogos, BoxServiceLogo, ContactUsStyles, ContainerContact, IconsPlusInformation, Line, Location, LogoGroupContact, LogoPLusContact, LogoSHContact, Mail, Name, NumberLocation, Reference } from './CoverContactUsStyles';
import "../UI/styles.css";

function CoverContactUs() {
    return (
        <ContactUsStyles>
            <ProductsTitle name="contáctanos aquí" />
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
                        <a href="https://wa.me/51987518875" className="iconLink">
                            <Icons type="whatsApp" className="iconsContact"/>
                        </a>
                        <NumberLocation>987 518 875</NumberLocation>
                    </IconsPlusInformation>
                    <IconsPlusInformation>
                        <a href="https://www.google.com/maps/place/SKORPIOS/@-12.2148039,-76.9333639,3a,75y,296.57h,95.55t/data=!3m6!1e1!3m4!1sUygA6lQdvdS7UoLP1GOmMQ!2e0!7i13312!8i6656!4m5!3m4!1s0x9105b9589ab73df3:0x5f1caa04f6696ac7!8m2!3d-12.2145877!4d-76.933382" className="iconLink">
                            <Icons type="location" className="iconsContact"/>
                        </a>
                        <div>
                            <Location>sector 3 grupo 7 manzana f lote 24</Location>
                            <Reference>(Avenida Bolivar con Avenida Central, a una cuadra de UNTELS)</Reference>
                        </div>
                    </IconsPlusInformation>
                    <IconsPlusInformation>
                        <div className="iconLinkMail">
                            <Icons type="mail" className="iconMail"/>
                        </div>
                        <Mail>miguel.solis.huaman1972@gmail.com</Mail>
                    </IconsPlusInformation>
                </BoxInformationContact>
            </ContainerContact>
        </ContactUsStyles>
    );
}

export default CoverContactUs;