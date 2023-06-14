import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { sendMessageActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";

// let dialogs = [
//     {name: 'Dimych', id: 1},
//     {name: 'Andrey', id: 2},
//     {name: 'Sveta', id: 3},
//     {name: 'Sasha', id: 4},
//     {name: 'Viktor', id: 5},
//     {name: 'Valera', id: 6},
//    ];

// let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

// let messages = [
//     {message: 'Hi'},
//     {message: 'How is your mood'},
//     {message: 'Yo'},
//     {message: 'Yo'},
//     {message: 'Yo'},
// ]; 

// let messagesElements = messages.map(m => <Message message={m.message}/>);




const Dialogs = (props) => {
    let dialogsElements = props.stateDialogsPage.dialogs.map(d => <DialogItem imgURL={d.imgURL} name={d.name} id={d.id} />);

    let messagesElements = props.stateDialogsPage.messages.map(m => <Message whose={m.whoseMess} message={m.message} />);

let newMessageElement = React.createRef();



let sendMessage = () => {
    // let text = newMessageElement.current.value;
    // props.addMessage();
    //props.stateDialogsPage.newMessageText=""; //(dont need)did it in state.js
    props.dispatch(sendMessageActionCreator());
}



let onMessageChange = () => {
    let newMessageBody = newMessageElement.current.value;
    // props.updateNewMessageText(text);
    props.dispatch(onMessageChangeActionCreator(newMessageBody));
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/* {dialogsElements} */}
                {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
                <DialogItem name={dialogs[5].name} id={dialogs[5].id}/> */}
            </div>

            <div className={s.messages}>
                {messagesElements}
                {/* {messagesElements} */}
                {/* <Message message={messages0[0].message}/>
                <Message message={messages0[1].message}/>
                <Message message={messages0[2].message}/>
                <Message message={messages0[3].message}/>
            <Message message={messages0[4].message}/> */}
            </div>

            <div className={s.addNewMessage}>
                <textarea ref={ newMessageElement } value={props.stateDialogsPage.newMessageText} onChange={ onMessageChange }/>
                <button onClick={ sendMessage }>Send message</button>
            </div>

        </div>

    )
}

export default Dialogs;