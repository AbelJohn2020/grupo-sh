import React from 'react';
import { ContactServices } from '../Buttons/Buttons';
import { Colors } from '../UI/Colors';
import { BoardCoverWelcome, ColorTitle, ColorTitleRight, CoverWelcome, OpacityCoverWelcome, TextTitle, WelcomeButton, WelcomeTitle, WelcomeTitleContent } from './WelcomeServicesStyles';

function WelcomeServices(props) {
    return (
        <CoverWelcome>
            <OpacityCoverWelcome>
                <BoardCoverWelcome>
                    <WelcomeTitleContent>
                        <WelcomeTitle>
                            <ColorTitle colorLetter={Colors.welcomeTitle}>bienvenidos a</ColorTitle> 
                            <ColorTitle colorLetter={Colors.redServices}>biomag</ColorTitle>
                            <ColorTitleRight colorLetter={Colors.gray}>s</ColorTitleRight>
                            <ColorTitleRight colorLetter={Colors.subtitle}>h</ColorTitleRight>
                        </WelcomeTitle>
                        <TextTitle>Realizamos sesiones de biomagnetismo</TextTitle>
                        <TextTitle>Tu salud y tu bienestar es nuestra prioridad</TextTitle>
                    </WelcomeTitleContent>
                    <WelcomeButton>
                        <ContactServices name="contáctanos aquí" url="#appointment" />
                    </WelcomeButton>
                </BoardCoverWelcome>
            </OpacityCoverWelcome>
        </CoverWelcome>
    );
}

export default WelcomeServices;