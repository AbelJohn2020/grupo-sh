import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from './ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import ColagenoHidrolizadoImg from "../../../images/inkavida/colageno-hidrolizado.png";

export const ColagenoHidrolizado = () => {



    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="colageno hidrolizado" image={ColagenoHidrolizadoImg} product="Colageno Hidrolizado" />
            <InkavidaFooter />
        </Body>
    )
}

export default ColagenoHidrolizado;