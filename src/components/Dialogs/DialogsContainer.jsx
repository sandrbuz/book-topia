import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { reset } from 'redux-form';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { useRef, useEffect } from 'react';
import { Route } from 'react-router-dom';
import sendIcon from "../../assets/images/sendIcon.png"
import { Textarea } from '../common/FormsControls/FormsControls.js';
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';





const DialogsContainer = (props) => {
    const messagesWrappers = useRef([]);
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/dialogs/1`);
    }, []);
    useEffect(() => {
        scrollToBottom()
    });
    let sendMessage = async (values, formName) => {
        await props.sendMessage(values.newMessageBody, formName)
        await props.dispatch(reset(formName));
        scrollToBottom()
    }
    const scrollToBottom = () => {
        messagesWrappers.current.forEach(wrapper => {
            if (wrapper) {
                wrapper.scrollTop = wrapper.scrollHeight;
            }
        });
    }



    let dialogsElements = props.dialogs.map(d => <DialogItem imgURL={d.imgURL} key={d.id} name={d.name} id={d.id} />);
    const renderMessages = (messages) => messages.map(m => <Message whose={m.whoseMess} key={m.id} message={m.message} id={m.id} />);
    let messagesDimych = renderMessages(props.messagesDimych);
    let messagesAndrey = renderMessages(props.messagesAndrey);
    let messagesSveta = renderMessages(props.messagesSveta);
    let messagesSasha = renderMessages(props.messagesSasha);
    let messagesViktor = renderMessages(props.messagesViktor);
    let messagesValera = renderMessages(props.messagesValera);

    let chats = [
        { path: "/1", whoseMessages: messagesDimych, formName: "Dima", key: 1 },
        { path: "/2", whoseMessages: messagesAndrey, formName: "Andrey", key: 2 },
        { path: "/3", whoseMessages: messagesSveta, formName: "Sveta", key: 3 },
        { path: "/4", whoseMessages: messagesSasha, formName: "Sasha", key: 4 },
        { path: "/5", whoseMessages: messagesViktor, formName: "Viktor", key: 5 },
        { path: "/6", whoseMessages: messagesValera, formName: "Valera", key: 6 },
    ].map(chat => <Route key={chat.key} path={chat.path} element={
        <div className={s.chat} >
            <div className={s.messagesWrapper} ref={ref => messagesWrappers.current.push(ref)}>{chat.whoseMessages}</div>
            <NewMessageReduxForm id={chat.key} key={chat.key} formName={chat.formName} onSubmit={sendMessage} />
        </div>} />)

    return <Dialogs dialogsElements={dialogsElements}  chats={chats} {...props} />
}

const AddMessageForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={props.handleSubmit} className={s.addNewMessage}>
            <Field className={s.field} name="newMessageBody" component={Textarea} placeholder='Enter your message' />
            <button className={s.button} type={"submit"} disabled={pristine || submitting}><img src={sendIcon} /></button>
        </form>
    )
}
const NewMessageReduxForm = (props) => {
    const FormComponent = reduxForm({ form: props.formName, destroyOnUnmount: false })(AddMessageForm);
    const handleSubmit = (values) => {
        props.onSubmit(values, props.formName);
    };
    return <FormComponent onSubmit={handleSubmit} />;
}


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        isAuth: state.auth.isAuth,
        messagesDimych: state.dialogsPage.messagesDimych,
        messagesAndrey: state.dialogsPage.messagesAndrey,
        messagesSveta: state.dialogsPage.messagesSveta,
        messagesSasha: state.dialogsPage.messagesSasha,
        messagesViktor: state.dialogsPage.messagesViktor,
        messagesValera: state.dialogsPage.messagesValera
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText, formName) => {
            dispatch(sendMessageActionCreator(newMessageText, formName));
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(DialogsContainer)