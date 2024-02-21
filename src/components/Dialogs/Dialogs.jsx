import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls.js';
import { required, maxLengthCreator } from '../../utils/validators/validators.js';
import { Routes, Route } from "react-router-dom";
import { useMatch } from 'react-router-dom';



const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);

    let messagesDimych = props.messagesDimych.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesAndrey = props.messagesAndrey.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSveta = props.messagesSveta.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSasha = props.messagesSasha.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesViktor = props.messagesViktor.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesValera = props.messagesValera.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);


    let addNewMessageDimych = (values) => {
        props.sendMessageDimych(values.newMessageBody);
    }
    let addNewMessageAndrey = (values) => {
        props.sendMessageAndrey(values.newMessageBody);
    }
    let addNewMessageSveta = (values) => {
        props.sendMessageSveta(values.newMessageBody);
    }
    let addNewMessageSasha = (values) => {
        props.sendMessageSasha(values.newMessageBody);
    }
    let addNewMessageViktor = (values) => {
        props.sendMessageViktor(values.newMessageBody);
    }
    let addNewMessageValera = (values) => {
        props.sendMessageValera(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div>
                <Routes>
                    <Route path="/" element={<div className={s.messages} >{messagesDimych}
                        <NewMessageReduxForm key={1}   onSubmit={addNewMessageDimych} /></div>} />
                    <Route path="/1" element={<div className={s.messages} >{messagesDimych}
                        <NewMessageReduxForm key={2}   onSubmit={addNewMessageDimych} /></div>} />
                    <Route path="/2" element={<div className={s.messages} >{messagesAndrey}
                        <NewMessageReduxForm key={3}   onSubmit={addNewMessageAndrey} /></div>} />
                    <Route path="/3" element={<div className={s.messages} >{messagesSveta}
                        <NewMessageReduxForm key={4}   onSubmit={addNewMessageSveta} /></div>} />
                    <Route path="/4" element={<div className={s.messages} >{messagesSasha}
                        <NewMessageReduxForm key={5}  onSubmit={addNewMessageSasha} /></div>} />
                    <Route path="/5" element={<div className={s.messages} >{messagesViktor}
                        <NewMessageReduxForm key={6}   onSubmit={addNewMessageViktor} /></div>} />
                    <Route path="/6" element={<div className={s.messages} >{messagesValera}
                        <NewMessageReduxForm key={7}   onSubmit={addNewMessageValera} /></div>} />
                </Routes>

            </div>

        </div>

    )
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addNewMessage}>
            <Field name="newMessageBody" component={Textarea} placeholder='Enter your message' validate={[required, maxLength50]} />
            <button type={"submit"}>Send message</button>
        </form>
    )
}



const NewMessageReduxForm = reduxForm({ form: "newMessage" })(AddMessageForm)

// const NewMessageReduxForm = (props) => {
//     const FormComponent = reduxForm({ form: props.formName })(AddMessageForm);

//     return <FormComponent onSubmit={props.onSubmit} />;
// }





export default Dialogs;