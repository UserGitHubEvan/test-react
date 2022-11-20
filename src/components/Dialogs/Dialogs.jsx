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

    // Imitating a server with data. Array with data objects
    let dialogs = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Kosta'},
        {id: '3', name: 'Misha'},
        {id: '4', name: 'Den'},
        {id: '5', name: 'Anna'}
    ];

    let messages = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'Who are you?'},
        {id: '3', message: 'Hi'}
    ];

    // Using function .map() for new Array components
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = messages.map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                { dialogsElements }
            </ul>
            <ul className={classes.messagesList}>
                { messagesElements }
            </ul>
        </div>
    );
}

export default Dialogs;