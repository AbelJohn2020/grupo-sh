import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import SuperInkaImg from "../../../images/inkavida/nutriente-energetico.png";

const SuperInka = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="super inka" image={SuperInkaImg} product="Super Inka" />
            <InkavidaFooter />
        </Body>
    )
}

export default SuperInka;