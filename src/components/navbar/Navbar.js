import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
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
                            <NavLink exact to="/" className="AboutUs we" onClick={() => setActive(!active)}>
                                inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/servicios" className="AboutUs we" onClick={() => setActive(!active)}>
                                servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/herbalife" className="AboutUs we" onClick={() => setActive(!active)}>
                                herbalife
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contactanos" className="AboutUs we" onClick={() => setActive(!active)}>
                                contactanos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/nosotros" className="AboutUs we" onClick={() => setActive(!active)}>
                                nosotros
                            </NavLink>
                        </li>
                    </OptionsStyles>
                </DivOptionsStyles>
            </DivOptionsStylesWithHamburger>
        </NavbarStyles>
    )
}

export default Navbar;
