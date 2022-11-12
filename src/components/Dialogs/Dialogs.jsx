import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                <li className={classes.dialog}><NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to='/dialogs/1'>Sasha</NavLink></li>
                <li className={classes.dialog}><NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to='/dialogs/2'>Kosta</NavLink></li>
                <li className={classes.dialog}><NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to='/dialogs/3'>Misha</NavLink></li>
                <li className={classes.dialog}><NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to='/dialogs/4'>Den</NavLink></li>
                <li className={classes.dialog}><NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to='/dialogs/5'>Anna</NavLink></li>
            </ul>
            <ul className={classes.messagesList}>
                <li className={classes.message}>Hello</li>
                <li className={classes.message}>Who are you?</li>
                <li className={classes.message}>Hi</li>
            </ul>
        </div>
    );
}

export default Dialogs;