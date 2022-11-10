import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}><NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/profile">Profile</NavLink></li>
                <li className={classes.item}><NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/dialogs">Message</NavLink></li>
                <li className={classes.item}><NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/news">News</NavLink></li>
                <li className={classes.item}><NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/music">Music</NavLink></li>
                <li className={classes.item}><NavLink className={ navData => navData.isActive ? classes.activeLink : classes.item } to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;