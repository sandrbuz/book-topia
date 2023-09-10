import React from 'react';
import s from './Message.module.css';


let Message = (props) => {

    let messageClassName = "";
  
    if (props.whose === "s.right") {
      messageClassName = s.right;
    } else if (props.whose === "s.left") {
      messageClassName = s.left;
    }

    return (
        <div className={`${messageClassName} ${s.item}`}>{props.message}</div>
    )
}


export default Message;