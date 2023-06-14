
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text
    }
}


const dialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            message: state.newMessageText,
            whoseMess: "s.right",

        };
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newMessageBody;

    }
    return state;
}
export default dialogsReducer;