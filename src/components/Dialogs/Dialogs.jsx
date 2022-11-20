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
    let dialogsData = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Kosta'},
        {id: '3', name: 'Misha'},
        {id: '4', name: 'Den'},
        {id: '5', name: 'Anna'}
    ]

    let messageData = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'Who are you?'},
        {id: '3', message: 'Hi'}
    ]

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsList}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </ul>
            <ul className={classes.messagesList}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
            </ul>
                <Message message={messageData[2].message} />
        </div>
    );
}

export default Dialogs;