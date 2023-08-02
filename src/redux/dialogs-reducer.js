
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

let initialState = {
    dialogs: [
        { name: 'Dimych', id: 1, imgURL: 'https://media.istockphoto.com/id/1227618765/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BB%D0%B8%D1%86%D0%BE-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%81%D0%B5%D1%82%D0%B8-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg?s=170667a&w=0&k=20&c=SYxrUKNigAlq2F6Dl-KUTUCAYTCed4ideDPx4QNAP7c=' },
        { name: 'Andrey', id: 2, imgURL: 'https://android-obzor.com/wp-content/uploads/2022/02/1-9.jpg' },
        { name: 'Sveta', id: 3, imgURL: 'https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg' },
        { name: 'Sasha', id: 4, imgURL: 'https://klike.net/uploads/posts/2018-06/1528374055_2.jpg' },
        { name: 'Viktor', id: 5, imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3gqot1XZJQ_p-vuyZRJTB_eZf93ClAf95w&usqp=CAU' },
        { name: 'Valera', id: 6, imgURL: 'https://avatars.mds.yandex.net/i?id=bd7df532ef5d30ec4e22d68378da0c148dae2a51-8340026-images-thumbs&n=13' },
    ],
    messages: [
        { message: 'Hi', whoseMess: 's.right' },
        { message: 'How is your mood', whoseMess: "s.left" },
        { message: "i'm fine, thanks", whoseMess: "s.right" },
        { message: 'Yo', whoseMess: "s.left" },
        { message: "I'm glad to hear you", whoseMess: "s.right" },
        { message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, ab? Rerum quibusdam doloribus doloremque non.", whoseMess: "s.left" },
    ],
    newMessageText: ""

}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = { ...state };


    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                whoseMess: "s.right",
            };
            // stateCopy.messages = [...state.messages];
            // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageText = '';
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            // stateCopy.newMessageText = action.newMessageBody;
            return {
                ...state,
                newMessageText: action.newMessageBody
            };
        default: return state;

    }
    // return state;
}
export default dialogsReducer;
