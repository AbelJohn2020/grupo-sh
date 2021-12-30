import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import SuperTePlusImg from "../../../images/inkavida/super-te-plus.png";

const SuperTePlus = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="super te plus" image={SuperTePlusImg} product="Super Te Plus" />
            <InkavidaFooter />
        </Body>
    )
}

export default SuperTePlus;