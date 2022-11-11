import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                <li className={classes.dialog}>Sasha</li>
                <li className={`${classes.dialog} ${classes.active}`}>Kostya</li>
                <li className={classes.dialog}>Misha</li>
                <li className={classes.dialog}>Den</li>
                <li className={classes.dialog}>Anna</li>
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