import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Petr
                </div>
                <div className={s.dialog}>
                    Igor
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
                <div className={s.dialog}>
                    Aleksey
                </div>    
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Are you fine?</div>
                <div className={s.message}>What are your name?</div>

            </div>
            
        </div>
    )
}

export default Dialogs;