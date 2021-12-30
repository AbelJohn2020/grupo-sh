import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import InkaproImg from "../../../images/inkavida/inkapro.png";
import CardContent from '../../CardContent/CardContent';

const Inkapro = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="inkapro pro" image={InkaproImg} product="Inkapro Pro" />
            <InkavidaFooter />
        </Body>
    )
}

export default Inkapro;