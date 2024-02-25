import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls.js';
import { required, maxLengthCreator } from '../../utils/validators/validators.js';
import { Routes, Route } from "react-router-dom";
import sendIcon from "../../assets/images/sendIcon.png"
import { useEffect } from 'react';
import { reset } from 'redux-form';


const Dialogs = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to the first NavLink when the component mounts
        navigate(`/dialogs/1`);
    }, []);



    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);

    let messagesDimych = props.messagesDimych.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesAndrey = props.messagesAndrey.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSveta = props.messagesSveta.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSasha = props.messagesSasha.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesViktor = props.messagesViktor.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesValera = props.messagesValera.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);


    let addNewMessageDimych = (values) => {
        props.sendMessageDimych(values.newMessageBody);
        props.dispatch(reset('Dima'));
    }
    let addNewMessageAndrey = (values) => {
        props.sendMessageAndrey(values.newMessageBody);
        props.dispatch(reset('Andrey'));

    }
    let addNewMessageSveta = (values) => {
        props.sendMessageSveta(values.newMessageBody);
        props.dispatch(reset('Sveta'));

    }
    let addNewMessageSasha = (values) => {
        props.sendMessageSasha(values.newMessageBody);
        props.dispatch(reset('Sasha'));

    }
    let addNewMessageViktor = (values) => {
        props.sendMessageViktor(values.newMessageBody);
        props.dispatch(reset('Viktor'));

    }
    let addNewMessageValera = (values) => {
        props.sendMessageValera(values.newMessageBody);
        props.dispatch(reset('Valera'));

    }


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <Routes>
                <Route path="/" element={
                    <div className={s.chat} >
                        {messagesDimych}
                        <NewMessageReduxForm formName={"Dima"} key={1} onSubmit={addNewMessageDimych} />
                    </div>} />
                <Route path="/1" element={
                    <div className={s.chat} >
                        {messagesDimych}
                        <NewMessageReduxForm formName={"Dima"} key={2} onSubmit={addNewMessageDimych} />
                    </div>} />
                <Route path="/2" element={
                    <div className={s.chat} >
                        {messagesAndrey}
                        <NewMessageReduxForm formName={"Andrey"} key={3} onSubmit={addNewMessageAndrey} />
                    </div>} />
                <Route path="/3" element={
                    <div className={s.chat} >
                        {messagesSveta}
                        <NewMessageReduxForm formName={"Sveta"} key={4} onSubmit={addNewMessageSveta} />
                    </div>} />
                <Route path="/4" element={
                    <div className={s.chat} >
                        {messagesSasha}
                        <NewMessageReduxForm formName={"Sasha"} key={5} onSubmit={addNewMessageSasha} />
                    </div>} />
                <Route path="/5" element={
                    <div className={s.chat} >
                        {messagesViktor}
                        <NewMessageReduxForm formName={"Viktor"} key={6} onSubmit={addNewMessageViktor} />
                    </div>} />
                <Route path="/6" element={
                    <div className={s.chat} >
                        {messagesViktor}
                        <NewMessageReduxForm formName={"Valera"} key={7} onSubmit={addNewMessageValera} />
                    </div>} />
            </Routes>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addNewMessage}>
            <Field className={s.field} name="newMessageBody" component={Textarea} placeholder='Enter your message' />
            <button className={s.button} type={"submit"}><img src={sendIcon} /></button>
        </form>
    )
}



// const NewMessageReduxForm = reduxForm({ form: "newMessage", destroyOnUnmount: false })(AddMessageForm)

const NewMessageReduxForm = (props) => {
    const FormComponent = reduxForm({ form: props.formName, destroyOnUnmount: false })(AddMessageForm);
    return <FormComponent onSubmit={(values) => props.onSubmit(values, props.dispatch)} />;
}





export default Dialogs;