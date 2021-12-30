import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import ActivaInk from "../../../images/inkavida/activaink.png";

const Activaink = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="Activaink" image={ActivaInk} product="Activaink" />
            <InkavidaFooter />
        </Body>
    )
}

export default Activaink;