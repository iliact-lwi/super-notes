import React from "react";

import FooterLogo from "../../images/footerlogo.png";

import Telegram from '@material-ui/icons/Telegram';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';

const FooterComponent: React.FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-title">
                <div className="footer-title-logo">
                    <img className="footer-title-image"  src={ FooterLogo } alt="Footer logo"/>
                    <div className="footer-title-text">
                        Super Notes
                    </div>
                </div>
                <div className="footer-title-network">
                    <Telegram fontSize="large" />
                    <Instagram fontSize="large" />
                    <Facebook fontSize="large" />
                    <Twitter fontSize="large" />
                </div>
            </div>
            <div className="footer-subtitle">
                Add a note, and surprise everyone with your punctuality
            </div>

            <div className="footer-line"></div>

            <div className="footer-about">
                <div className="footer-about-author">
                    <div>Author: Viktor Nyshpal</div>
                    <div>Email: viktor.nyshpal@gmail.com</div>
                    <div>Telegram: @viko_o</div>
                    <div>Copyright © 2020 Super Notes</div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;