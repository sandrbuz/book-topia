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
import { useRef } from 'react';


const Dialogs = (props) => {
    const messagesWrappers = useRef([]);

    const scrollToBottom = () => {
        messagesWrappers.current.forEach(wrapper => {
            if (wrapper) {
                wrapper.scrollTop = wrapper.scrollHeight;
            }
        });
    }


    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to the first NavLink when the component mounts
        navigate(`/dialogs/1`);
        scrollToBottom()
    }, []);



    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);

    let messagesDimych = props.messagesDimych.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesAndrey = props.messagesAndrey.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSveta = props.messagesSveta.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSasha = props.messagesSasha.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesViktor = props.messagesViktor.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesValera = props.messagesValera.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);


    let addNewMessageDimych = async (values) => {
        await props.sendMessageDimych(values.newMessageBody);
        await props.dispatch(reset('Dima'));
        scrollToBottom();
    }
    let addNewMessageAndrey = async (values) => {
        await props.sendMessageAndrey(values.newMessageBody);
        await props.dispatch(reset('Andrey'));
        scrollToBottom();

    }
    let addNewMessageSveta = async (values) => {
        await props.sendMessageSveta(values.newMessageBody);
        await props.dispatch(reset('Sveta'));
        scrollToBottom();
    }
    let addNewMessageSasha = async (values) => {
        await props.sendMessageSasha(values.newMessageBody);
        await props.dispatch(reset('Sasha'));
        scrollToBottom();
    }
    let addNewMessageViktor = async (values) => {
        await props.sendMessageViktor(values.newMessageBody);
        await props.dispatch(reset('Viktor'));
        scrollToBottom();
    }
    let addNewMessageValera = async (values) => {
        await props.sendMessageValera(values.newMessageBody);
        await props.dispatch(reset('Valera'));
        scrollToBottom();
    }


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <Routes>
                <Route path="/" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesDimych}</div>
                        <NewMessageReduxForm formName={"Dima"} key={1} onSubmit={addNewMessageDimych} />
                    </div>} />
                <Route path="/1" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesDimych}</div>
                        <NewMessageReduxForm formName={"Dima"} key={2} onSubmit={addNewMessageDimych} />
                    </div>} />
                <Route path="/2" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesAndrey}</div>
                        <NewMessageReduxForm formName={"Andrey"} key={3} onSubmit={addNewMessageAndrey} />
                    </div>} />
                <Route path="/3" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesSveta}</div>
                        <NewMessageReduxForm formName={"Sveta"} key={4} onSubmit={addNewMessageSveta} />
                    </div>} />
                <Route path="/4" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesSasha}</div>
                        <NewMessageReduxForm formName={"Sasha"} key={5} onSubmit={addNewMessageSasha} />
                    </div>} />
                <Route path="/5" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesViktor}</div>
                        <NewMessageReduxForm formName={"Viktor"} key={6} onSubmit={addNewMessageViktor} />
                    </div>} />
                <Route path="/6" element={
                    <div className={s.chat} >
                        <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{messagesViktor}</div>
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