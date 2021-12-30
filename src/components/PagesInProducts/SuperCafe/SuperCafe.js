import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import SuperCafeImg from "../../../images/inkavida/super-cafe.png";

const SuperCafe = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="super cafe" image={SuperCafeImg} product="Super Cafe" />
            <InkavidaFooter />
        </Body>
    )
}

export default SuperCafe;