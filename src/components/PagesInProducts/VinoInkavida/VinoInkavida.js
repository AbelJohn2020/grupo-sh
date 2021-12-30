import React from 'react';
import InkavidaFooter from '../../InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../../InkavidaNavbar/InkavidaNavbar';
import { Body } from '../ColagenoHidrolizado/ColagenoHidrolizadoStyles';
import "../../UI/styles.css";
import CardContent from '../../CardContent/CardContent';
import VinoInkavidaImg from "../../../images/inkavida/vino-inkavida.png";

const VinoInkavida = () => {
    return (
        <Body>
            <InkavidaNavbar />
            <CardContent title="vino inkavida" image={VinoInkavidaImg} product="Vino Inkavida" />
            <InkavidaFooter />
        </Body>
    )
}

export default VinoInkavida;