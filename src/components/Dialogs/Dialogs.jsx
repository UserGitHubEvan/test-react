import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    // exsample
    let pathDialogsId = '/dialogs/' + props.id;

    return (
      <li className={classes.dialog}>
          <NavLink className={ navData => navData.isActive ? classes.active : classes.dialog } to={pathDialogsId}> {props.name} </NavLink>
      </li>
  );
}

const Message = (props) => {
    return <li className={classes.message}>{props.message}</li>;
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                <DialogItem name='Sasha' id='1' />
                <DialogItem name='Kosta' id='2' />
                <DialogItem name='Misha' id='3' />
                <DialogItem name='Den' id='4' />
                <DialogItem name='Anna' id='5' />
            </ul>
            <ul className={classes.messagesList}>
                <Message message='Hello' />
                <Message message='Who are you?' />
                <Message message='Hi' />
            </ul>
        </div>
    );
}

export default Dialogs;