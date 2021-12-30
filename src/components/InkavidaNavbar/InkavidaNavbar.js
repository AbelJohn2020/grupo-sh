import React from 'react';
import LogoInkavida from "../../images/inkavida-logo.png"
import { ExternalInkavidaNavbarStyle, InkavidaNavbarStyle } from './InkavidaNavbarStyles';
import "../UI/styles.css";

const InkavidaNavbar = () => {
    return (
        <ExternalInkavidaNavbarStyle>
            <InkavidaNavbarStyle>
                <img src={LogoInkavida} alt="Inkavida logo" />
            </InkavidaNavbarStyle>
        </ExternalInkavidaNavbarStyle>
    )
}

export default InkavidaNavbar;