import React from 'react';
import LogoHerbalife from "../../images/herbalife-products-grupo-sh/logo.png"
import { ExternalHerbalifeNavbarStyle, HerbalifeNavbarStyle } from './HerbalNavbarStyles';

const HerbalifeNavbar = () => {
    return (
        <ExternalHerbalifeNavbarStyle>
            <HerbalifeNavbarStyle>
                <img src={LogoHerbalife} alt="Herbalife logo" />
            </HerbalifeNavbarStyle>
        </ExternalHerbalifeNavbarStyle>
    )
}

export default HerbalifeNavbar;