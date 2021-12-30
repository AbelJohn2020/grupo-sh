import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { DivHamburger, DivOptionsStyles, DivOptionsStylesWithHamburger, NavbarStyles, OptionsStyles } from './NavbarStyles';
import GeneralLogo from "../../images/logo-sh/generalLogo.jpg"
import Icons from '../UI/Icons';
import "../UI/styles.css";

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <NavbarStyles>
            <img src={GeneralLogo} alt="GRUPO SH logo" />
            <DivOptionsStylesWithHamburger>
                <DivHamburger onClick={() => setActive(!active)} className={active && "toogle"}>
                    <Icons type="navbar" className="hamburger" />
                </DivHamburger>
                <DivOptionsStyles className={!active && "active"}>
                    <OptionsStyles>
                        <li>
                            <Link to="/" className="AboutUs we" onClick={() => setActive(!active)}>
                                inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicios" className="AboutUs we" onClick={() => setActive(!active)}>
                                servicios
                            </Link>
                        </li>
                        <li>
                            <Link to="/inkavida" className="AboutUs we" onClick={() => setActive(!active)}>
                                inkavida
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactanos" className="AboutUs we" onClick={() => setActive(!active)}>
                                contactanos
                            </Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="AboutUs we" onClick={() => setActive(!active)}>
                                nosotros
                            </Link>
                        </li>
                    </OptionsStyles>
                </DivOptionsStyles>
            </DivOptionsStylesWithHamburger>
        </NavbarStyles>
    )
}

export default Navbar;
