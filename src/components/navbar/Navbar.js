import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarStyles, OptionsStyles } from './NavbarStyles';
import GeneralLogo from "../../images/logo-sh/generalLogo.jpg"

const Navbar = () => {
    return (
        <NavbarStyles>
            <img src={GeneralLogo} alt="GRUPO SH logo" />
            <OptionsStyles>
                <Link to="/" className="AboutUs">
                    inicio
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
                <Link to="/nosotros" className="AboutUs">
                    nosotros
                </Link>
            </OptionsStyles>
        </NavbarStyles>
    )
}

export default Navbar;
