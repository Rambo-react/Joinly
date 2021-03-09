import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {

    // let DialogsData = [
    //     { id: 1, name: "Dima" },
    //     { id: 2, name: "Viktor" },
    //     { id: 3, name: "Petr" },
    //     { id: 4, name: "Igor" },
    //     { id: 5, name: "Vladimir" },
    //     { id: 6, name: "Aleksey" }
    // ];

    // let MessagesData = [
    //     { id: 1, message: "Hello" },
    //     { id: 2, message: "Are you fine?" },
    //     { id: 3, message: "What is your name?" },
    //     { id: 4, message: "Hello" }
    // ];

    let DialogElements = props.DialogsData.map( (d) => {
       return (<DialogItem name={d.name} id={d.id} />) 
    });


    let MessagesElements = props.MessagesData.map( (m) => {
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