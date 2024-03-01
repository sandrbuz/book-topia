import { sendMessageDimychActionCreator, sendMessageAndreyActionCreator, sendMessageSvetaActionCreator, sendMessageSashaActionCreator,sendMessageViktorActionCreator,sendMessageValeraActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {    
return{
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.isAuth, //not necessary (available in withRedirect hoc)
    messagesDimych: state.dialogsPage.messagesDimych,
    messagesAndrey: state.dialogsPage.messagesAndrey,
    messagesSveta: state.dialogsPage.messagesSveta,
    messagesSasha: state.dialogsPage.messagesSasha,
    messagesViktor: state.dialogsPage.messagesViktor,
    messagesValera: state.dialogsPage.messagesValera,
}

}
let mapDispatchToProps = (dispatch) => {    
 return {
    sendMessageDimych: (newMessageText) => {
        dispatch(sendMessageDimychActionCreator(newMessageText));
    },
    sendMessageAndrey: (newMessageText) => {
        dispatch(sendMessageAndreyActionCreator(newMessageText));
    },
    sendMessageSveta: (newMessageText) => {
        dispatch(sendMessageSvetaActionCreator(newMessageText));
    },
    sendMessageSasha: (newMessageText) => {
        dispatch(sendMessageSashaActionCreator(newMessageText));
    },
    sendMessageViktor: (newMessageText) => {
        dispatch(sendMessageViktorActionCreator(newMessageText));
    },
    sendMessageValera: (newMessageText) => {
        dispatch(sendMessageValeraActionCreator(newMessageText));
    }

 }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)