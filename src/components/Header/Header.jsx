import React from "react";
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt=""/>
        </header>
    );
}

export default Header;