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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElements} 
            </div>
            <div className={s.messages}>
                {MessagesElements} 
            </div>

        </div>
    )
}

export default Dialogs;