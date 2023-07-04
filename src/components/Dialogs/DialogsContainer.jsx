import React from "react";
// import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
// import DialogItem from './DialogItem/DialogItem.jsx';
// import Message from './Message/Message.jsx';
import { sendMessageActionCreator, onMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

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




const DialogsContainer = (props) => {
    let state = props.store.getState();
let sendMessage = () => {
    // let text = newMessageElement.current.value;
    // props.addMessage();
    //props.stateDialogsPage.newMessageText=""; //(dont need)did it in state.js
    props.store.dispatch(sendMessageActionCreator());
}
let newMessageChange = (body) => {
    // let newMessageBody = newMessageElement.current.value;
    // props.updateNewMessageText(text);
    props.store.dispatch(onMessageChangeActionCreator(body));
}
    return (
       <Dialogs sendMessage={sendMessage}
                newMessageChange={newMessageChange}
                dialogs={state.dialogsPage.dialogs} 
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;