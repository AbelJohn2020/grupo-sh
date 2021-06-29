import React from 'react';
import LogoHerbalife from "../../images/herbalife-products-grupo-sh/logo.png"
import { HerbalifeNavbarStyle } from './HerbalNavbarStyles';

const HerbalifeNavbar = () => {
    return (
        <HerbalifeNavbarStyle>
            <img src={LogoHerbalife} alt="Herbalife logo" />
        </HerbalifeNavbarStyle>
    )
}

export default HerbalifeNavbar;