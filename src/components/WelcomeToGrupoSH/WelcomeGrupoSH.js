import React from 'react';
import { Link } from 'react-router-dom';
import { BoxWelcomeImage, BoxWelcomeMessageStyles, GoToServices, WelcomeMessageStyles } from './WelcomeToGrupoSHStyles';
import "../UI/styles.css";

function WelcomeGrupoSH() {
    return (
        <div>
            <BoxWelcomeImage>
                <GoToServices>
                    <Link to="/servicios" className="BioSessions">
                        Sesiones de Biomagnetismo
                    </Link>
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