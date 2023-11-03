import React from 'react';
// import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem/DialogItem.jsx';
// import Message from './Message/Message.jsx';
import { sendMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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




// const DialogsContainer = () => {

//     return (

//         <StoreContext.Consumer>
//             {(store) => {

//                 let state = store.getState();

//                 let sendMessage = () => {
//                     // let text = newMessageElement.current.value;
//                     // props.addMessage();
//                     //props.stateDialogsPage.newMessageText=""; //(dont need)did it in state.js
//                     store.dispatch(sendMessageActionCreator());
//                 }

//                 let newMessageChange = (body) => {
//                     // let newMessageBody = newMessageElement.current.value;
//                     // props.updateNewMessageText(text);
//                     store.dispatch(onMessageChangeActionCreator(body));
//                 }


//                 return (
//                     <Dialogs sendMessage={sendMessage}
//                         newMessageChange={newMessageChange}
//                         dialogs={state.dialogsPage.dialogs}
//                         messages={state.dialogsPage.messages}
//                         newMessageText={state.dialogsPage.newMessageText} />
//                 )
//             }

//             }
//         </StoreContext.Consumer >
//     )
// }


// let authRedirectComponent = (props) => {
//     if (!props.isAuth) { return <Navigate to='/login' /> }
//     return <Dialogs {...props} />
// }

let mapStateToProps = (state) => {    
return{
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth //not necessary (available in withRedirect hoc)

}

}
let mapDispatchToProps = (dispatch) => {    
 return {
    sendMessage: () => {
        dispatch(sendMessageActionCreator());

    },
    newMessageChange: (body) => {
        dispatch(onMessageChangeActionCreator(body));
    }
 }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;