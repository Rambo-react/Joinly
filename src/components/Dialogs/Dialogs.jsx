import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { Textarea } from '../common/Preloader/FormsControls/FormControls';
import { maxLengthCreator, required } from '../utils/validators/validators';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogElements = state.dialogsData.map((d) => {
        return (<DialogItem name={d.name} key={d.id} id={d.id} />)
    });

    let MessagesElements = state.messagesData.map((m) => {
        return (<Message message={m.message} key={m.id} />)
    });

    let newMessageText = state.newMessageText;

    // ADD Message
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);

    }


    return (
        <div className={s.dialogs}>
            {/* dialogs */}
            <div className={s.dialogsItems}>
                {DialogElements}
            </div>
            <div className={s.blockMessages}>
                {/* messages */}
                <div className={s.messages}>
                    {MessagesElements}
                </div>
                {/* blockSendMessage */}
                <div className={s.blockSendMessage}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>

                </div>

            </div>


        </div>
    )
}
let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText" component={Textarea} placeholder='Enter your text' validate={[required, maxLength50]}/>
            </div>
            <div>
                <button >send message</button>
            </div>
        </Form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageorm" })(AddMessageForm);

export default Dialogs;