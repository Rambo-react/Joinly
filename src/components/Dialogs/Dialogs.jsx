import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogElements = state.dialogsData.map( (d) => {
       return (<DialogItem name={d.name} id={d.id} />) 
    });

    let MessagesElements = state.messagesData.map( (m) => {
       return (<Message message={m.message} />) 
    });

    let newMessageText = state.newMessageText;

    // ADD Message
    let onSendMessageClick = () => {  
       props.sendMessage();
      
    }

    // CHANGE TEXTAREA
    let onMessageChange = (e) => {
       
       let textMessage = e.target.value;
       props.updateNewMessageText(textMessage);     
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

                    <div>
                        <textarea placeholder='Enter your text' onChange={onMessageChange} value={newMessageText} />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick} >send message</button>
                    </div>
                    
                </div>

            </div>
            

        </div>
    )
}

export default Dialogs;