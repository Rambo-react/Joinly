import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;


                // ADD Message
                let SendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                // CHANGE TEXTAREA
                let onMessageChange = (textMessage) => {

                    store.dispatch(updateNewMessageTextActionCreator(textMessage));
                }

                return (
                    <Dialogs sendMessage={SendMessage} updateNewMessageText={onMessageChange} dialogsPage={state} />
                )
            }

            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;