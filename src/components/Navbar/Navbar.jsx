import React from "react";
import classes from './Navbar.module.css';

console.log(classes);

// let classes {
//     'nav': 'Navbar_nav_dfdf',
//     'item': 'Navbar_Item_dfdf'
// }

// let c1 = 'item';
// let c2 = 'active';
// let clases = c1 + c2;
// let classesNew = `${c1} ${c2}`;

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li><a className={`${classes.item} ${classes.active}`} href="">Profile</a></li>
                <li><a className={classes.item} href="">Message</a></li>
                <li><a className={classes.item} href="">News</a></li>
                <li><a className={classes.item} href="">Music</a></li>
                <li><a className={classes.item} href="">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;