import React from 'react';
import { AboutUsStyles, BoxDeliveryStyles, BoxInformationStyles, BoxLifeStyles, BoxUsStyles, ClearAbsolute, DivBoxUsStyles, InformationStyles, LogoGroup, LogoPLus, LogoSH, ShGroupStyles } from './ShGroupStyles';

const ShGroup = () => {
    return (
        <ShGroupStyles>
            <ClearAbsolute>
                <AboutUsStyles>
                    <BoxUsStyles>
                        <DivBoxUsStyles>
                            <LogoPLus>
                                <LogoGroup>grupo<LogoSH>sh</LogoSH></LogoGroup>
                            </LogoPLus>
                            Somos un personal capacitado
                        </DivBoxUsStyles>
                    </BoxUsStyles>
                    <InformationStyles>
                        <BoxInformationStyles>
                            <h1>¿Quienes somos?</h1>
                            <p>Somos un grupo de peruanos emprendedores que ofrece terapias <b>no invasivas</b> de biomagnetismo mediante sesiones, generando confianza con nuestros clientes.</p>
                        </BoxInformationStyles>
                    </InformationStyles>
                </AboutUsStyles>
                <AboutUsStyles>
                    <BoxLifeStyles>
                        <p>Queremos ayudarte a mejorar tu salud</p>
                    </BoxLifeStyles>
                    <InformationStyles>
                        <BoxInformationStyles>
                            <h1>Nuestros Clientes</h1>
                            <p>Nuestra mision es brindar un servicio de calidad en terapias de biomagnetismo para el bienestar de nuestros clientes, ofreciendo ademas seguridad y confianza. </p>
                        </BoxInformationStyles>
                    </InformationStyles>
                </AboutUsStyles>
                <AboutUsStyles>
                    <BoxDeliveryStyles>
                        <p>Por motivos de pandemia podemos llegar a ti</p>
                    </BoxDeliveryStyles>
                    <InformationStyles>
                        <BoxInformationStyles>
                            <h1>Nuestra intensión</h1>
                            <p>La salud es lo mas importante que existe en la vida, por esta razon priorizamos llegar a todos los lugares posibles de Lima Metropolitana donde hayan personas que requieran de nuestro servicio para mejorar su salud. </p>
                        </BoxInformationStyles>
                    </InformationStyles>
                </AboutUsStyles>
            </ClearAbsolute>
        </ShGroupStyles>
    )
}

export default ShGroup;
