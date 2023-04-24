import React from "react";
import s from "./Message.module.css";

let Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message;