import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

   let state = props.store.getState().dialogsPage;
// let state = props.store.getState();

    // ADD Message
    let SendMessage = () => {  
       props.store.dispatch(addMessageActionCreator());
    }

    // CHANGE TEXTAREA
    let onMessageChange = (textMessage) => {

        props.store.dispatch(updateNewMessageTextActionCreator(textMessage));    
    }

    return (<Dialogs sendMessage={SendMessage} updateNewMessageText={onMessageChange} dialogsPage={state} />)
}

export default DialogsContainer;