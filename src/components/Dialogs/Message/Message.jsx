import React from 'react';
import s from './Message.module.css';


let Message = (props) => {

    let whoseMsg = "";
  
    if (props.whose === "s.right") {
      whoseMsg = s.right;
    } else if (props.whose === "s.left") {
      whoseMsg = s.left;
    }

    return (
        <div className={`${whoseMsg} ${s.item}`}>{props.message}</div>
    )
}


export default Message;