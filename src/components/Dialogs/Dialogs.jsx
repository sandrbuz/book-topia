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
        navigate(`/dialogs/1`);
        scrollToBottom()
    }, []);
    // useEffect(() => {
    //     scrollToBottom()
    // });



    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);

    let messagesDimych = props.messagesDimych.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesAndrey = props.messagesAndrey.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSveta = props.messagesSveta.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesSasha = props.messagesSasha.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesViktor = props.messagesViktor.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesValera = props.messagesValera.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);

   let sendMessage = async (values, formName) => {
       await props.sendMessage(values.newMessageBody,formName)
       await props.dispatch(reset(formName));
       scrollToBottom();
   }

//   let testArr = props.testArr.map(ar => <div>1</div>)

    let chats = [
        { path: "/1", whoseMessages: messagesDimych, formName: "Dima", key: 1},
        { path: "/2", whoseMessages: messagesAndrey, formName: "Andrey", key: 2},
        { path: "/3", whoseMessages: messagesSveta, formName: "Sveta", key: 3},
        { path: "/4", whoseMessages: messagesSasha, formName: "Sasha", key: 4},
        { path: "/5", whoseMessages: messagesViktor, formName: "Viktor", key: 5},
        { path: "/6", whoseMessages: messagesValera, formName: "Valera", key: 6},
    ]
    .map(chat => <Route key={chat.key} path={chat.path} element={
        <div className={s.chat} >
            <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{chat.whoseMessages}</div>
            <NewMessageReduxForm id={chat.key} key={chat.key} formName={chat.formName} onSubmit={sendMessage} />
        </div>} />)



    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <Routes>
                {chats}
            </Routes>
        </div>

    )
}

const validate = values => {
    const errors = {};
    if (!values.newMessageBody || values.newMessageBody.trim() === '') {
        //   errors.newMessageBody = 'Message is required';
    }
    return errors;
};

const AddMessageForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;



    return (
        <form onSubmit={props.handleSubmit} className={s.addNewMessage}>
            <Field className={s.field} name="newMessageBody" component={Textarea} placeholder='Enter your message' />
            <button className={s.button} type={"submit"} disabled={pristine || submitting}><img src={sendIcon} /></button>
        </form>
    )
}



// const NewMessageReduxForm = reduxForm({ form: "newMessage", destroyOnUnmount: false })(AddMessageForm)

const NewMessageReduxForm = (props) => {
    const FormComponent = reduxForm({ form: props.formName, destroyOnUnmount: false })(AddMessageForm);
    const handleSubmit = (values) => {
        props.onSubmit(values, props.formName);
    };
    return <FormComponent onSubmit={handleSubmit} />;
    // return <FormComponent onSubmit={(values) => props.onSubmit(values, props.dispatch)} />;
}





export default Dialogs;




// let arr = (name) => {
//    let messagesValera = "val"
//    let messageSasha = "Sa"
//    let messageSveta = "Sve"

   


//    return console.log(messages{name})

// }

// arr("Valera")