import React from 'react';
import { ContactServices } from '../Buttons/Buttons';
import { Colors } from '../UI/Colors';
import { BoardCoverWelcome, ColorLeftTitle, ColorTitle, ColorTitleRight, CoverWelcome, OpacityCoverWelcome, TextTitle, WelcomeButton, WelcomeTitle, WelcomeTitleContent } from './WelcomeServicesStyles';

function WelcomeServices() {
    return (
        <CoverWelcome>
            <OpacityCoverWelcome>
                <BoardCoverWelcome>
                    <WelcomeTitleContent>
                        <WelcomeTitle>
                            <ColorLeftTitle colorLetter={Colors.welcomeTitle}>bienvenidos a</ColorLeftTitle> 
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