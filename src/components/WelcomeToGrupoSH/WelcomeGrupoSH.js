import React from 'react';
import { ContactServices } from '../Buttons/Buttons';
import { BoxWelcomeImage, BoxWelcomeMessageStyles, GoToServices, WelcomeMessageStyles } from './WelcomeToGrupoSHStyles';

function WelcomeGrupoSH() {
    return (
        <div>
            <BoxWelcomeImage>
                <GoToServices>
                    <ContactServices name="Sesiones con Biomagnetismo" url="/servicios" />
                </GoToServices>
            </BoxWelcomeImage>
            <BoxWelcomeMessageStyles>
                <WelcomeMessageStyles>
                    Para conservar la salud, es importante que estemos bien tanto a nivel físico como a nivel emocional. Médicos y terapeutas aseguran que la relación mente/cuerpo es muy estrecha, pues nuestras emociones afectan nuestra salud y las enfermedades influyen en nuestro estado emocional.
                </WelcomeMessageStyles>
            </BoxWelcomeMessageStyles>
        </div>
    );
}

export default WelcomeGrupoSH;