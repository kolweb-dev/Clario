import React from "react";

import logo from '../../assets/images/Logo.png'

import './index.css'

const Footer = () => {

    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt='logo' />
            <p className="footer__text">© 2023 Clario Tech DMCC <br/>
            All rights reserved.</p>
        </footer>
    )
}

export default Footer;