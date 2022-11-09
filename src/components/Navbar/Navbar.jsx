import React from "react";
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li><Link className={classes.item} to="/profile">Profile</Link></li>
                <li><Link className={`${classes.item} ${classes.active}`} to="/dialogs">Message</Link></li>
                <li><Link className={classes.item} to="/news">News</Link></li>
                <li><Link className={classes.item} to="/music">Music</Link></li>
                <li><Link className={classes.item} to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;