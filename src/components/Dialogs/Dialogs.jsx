import React from 'react';
import s from './Dialogs.module.css';
import { Routes} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {props.dialogsElements}
            </div>
            <Routes>
                {props.chats}
            </Routes>
        </div>
    )
}

export default Dialogs;


