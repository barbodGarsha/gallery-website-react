import * as React from "react";
import './Styles/Header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="header__container">    
                <a href="index.html" className="header__logo">Gallery <span className="header__logo--color-primary">Website</span>
                    <div className="header__underline"></div>
                </a>
                <a href="index.html" className="header__my-account-btn">My Account
                    <div className="header__underline"></div>
                </a>
            </div>
        </div>
    )
}