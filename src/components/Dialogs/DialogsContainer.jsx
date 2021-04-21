import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { addMessage } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return ( {
        dialogsPage: state.dialogsPage
    })
}

//  ,withAuthRedirect редирект на форму ввода логина и пароля если не залогинился 
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage}) 
    ) (Dialogs);


