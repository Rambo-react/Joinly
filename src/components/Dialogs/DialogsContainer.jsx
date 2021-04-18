import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    ) (Dialogs);


