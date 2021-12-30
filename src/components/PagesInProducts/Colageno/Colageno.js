import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import ColagenoImg from "../../../images/inkavida/colageno.png";

const Colageno = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="colageno" image={ColagenoImg} product="Colageno" />
            <InkavidaFooter />
        </Body>
    )
}

export default Colageno;