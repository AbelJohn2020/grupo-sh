import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import InkamenPasionImg from "../../../images/inkavida/inkamen-pasion.png";

const InkamenPasion = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="inkamen pasion" image={InkamenPasionImg} product="Inkamen Pasion" />
            <InkavidaFooter />
        </Body>
    )
}

export default InkamenPasion;