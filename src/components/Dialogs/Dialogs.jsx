import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls.js';
import { required, maxLengthCreator } from '../../utils/validators/validators.js';

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
    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);

    let messagesElements = props.messages.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);


    let addNewMessage = (values) => {   // instead onSubmit
        props.sendMessage(values.newMessageBody);
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
            <NewMessageReduxForm onSubmit={addNewMessage} />
        </div>

    )
}
const maxLength50 = maxLengthCreator(50); 

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addNewMessage}>
            <Field name="newMessageBody" component={Textarea} placeholder='Enter your message' validate={[required, maxLength50]}/>
            <button type={"submit"}>Send message</button>
        </form>
    )
}
const NewMessageReduxForm = reduxForm({ form: "newMessage" })(AddMessageForm)

export default Dialogs;