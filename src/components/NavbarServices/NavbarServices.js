import React from 'react';
import BiomagSH from "../../images/logo-sh/servicesLogo.jpg";
import { NavbarServicesSH } from './NavbarServicesStyles';
import "../UI/styles.css";

function NavbarServices() {
    return (
        <NavbarServicesSH>
            <img src={BiomagSH} alt="BiomagSH Logo" />
        </NavbarServicesSH>
    );
}

export default NavbarServices;