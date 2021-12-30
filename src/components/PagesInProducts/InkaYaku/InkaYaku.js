import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import InkaYakuImg from "../../../images/inkavida/agua-ozonizada.png";

const InkaYaku = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="inka yaku" image={InkaYakuImg} product="Inka Yaku" />
            <InkavidaFooter />
        </Body>
    )
}

export default InkaYaku;