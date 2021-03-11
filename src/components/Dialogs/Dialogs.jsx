import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {


    let DialogElements = props.stateDialogs.dialogsData.map( (d) => {
       return (<DialogItem name={d.name} id={d.id} />) 
    });


    let MessagesElements = props.stateDialogs.messagesData.map( (m) => {
       return (<Message message={m.message} />) 
    });

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let textMessage = newMessageElement.current.value;
        alert(textMessage);
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
                        <textarea ref={newMessageElement} ></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage} >send message</button>
                    </div>
                    
                </div>

            </div>
            

        </div>
    )
}

export default Dialogs;