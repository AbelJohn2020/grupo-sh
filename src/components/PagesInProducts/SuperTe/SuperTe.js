import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import SuperTeImg from "../../../images/inkavida/super-te.png";

const SuperTe = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="super te" image={SuperTeImg} product="Super Te" />
            <InkavidaFooter />
        </Body>
    )
}

export default SuperTe;