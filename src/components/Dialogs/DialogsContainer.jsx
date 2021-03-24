import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return ( {
        dialogsPage: state.dialogsPage
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        updateNewMessageText: (textMessage) => {dispatch(updateNewMessageTextActionCreator(textMessage));},
        sendMessage: () => {dispatch(addMessageActionCreator());}
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;