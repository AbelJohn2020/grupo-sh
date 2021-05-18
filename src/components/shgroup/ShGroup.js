import React from 'react';
import { AboutUsStyles, BoxDeliveryStyles, BoxInformationStyles, BoxLifeStyles, BoxUsStyles, InformationStyles, ShGroupStyles } from './ShGroupStyles';

const ShGroup = () => {
    return (
        <ShGroupStyles>
            <AboutUsStyles>
                <BoxUsStyles>
                    <p>Somos un personal capacitado</p>
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
                        <p>La salud es lo mas importante que existe en la vida, por esta razon priorizamos llegar a todos los lugares posibles de Lima Metropolitana donde hayan personas que requieran de nuestro servicio para mejorar su salud. </p>
                    </BoxInformationStyles>
                </InformationStyles>
            </AboutUsStyles>
        </ShGroupStyles>
    )
}

export default ShGroup;
