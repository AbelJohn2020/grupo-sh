import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarStyles, OptionsStyles } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarStyles>
            <p>Logo</p>
            <OptionsStyles>
                <Link to="/nosotros" className="AboutUs">
                    nosotros
                </Link>
                <Link to="/servicios" className="AboutUs">
                    servicios
                </Link>
                <Link to="/herbalife" className="AboutUs">
                    herbalife
                </Link>
                <Link to="/contactanos" className="AboutUs">
                    contactanos
                </Link>
            </OptionsStyles>
        </NavbarStyles>
    )
}

export default Navbar;
