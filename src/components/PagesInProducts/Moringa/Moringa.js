import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import MoringaImg from "../../../images/inkavida/moringa.png";

const Moringa = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="moringa" image={MoringaImg} product="Moringa" />
            <InkavidaFooter />
        </Body>
    )
}

export default Moringa;