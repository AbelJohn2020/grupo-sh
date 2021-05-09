import React from 'react'
import { NavbarStyles, OptionsStyles } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarStyles>
            <p>Logo</p>
            <OptionsStyles>
                <p>Quienes somos</p>
                <p>Herbalife</p>
                <p>servicios</p>
                <p>contactanos</p>
            </OptionsStyles>
        </NavbarStyles>
    )
}

export default Navbar;
