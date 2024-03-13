const SEND_MESSAGE = 'SEND_MESSAGE';


export const sendMessageActionCreator = (newMessageText, formName) => {
    return {
        type: SEND_MESSAGE, newMessageText, formName
    }
}


let initialState = {
    dialogs: [
        { name: 'Dimych', id: 1, imgURL: 'https://media.istockphoto.com/id/1227618765/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BB%D0%B8%D1%86%D0%BE-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%81%D0%B5%D1%82%D0%B8-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg?s=170667a&w=0&k=20&c=SYxrUKNigAlq2F6Dl-KUTUCAYTCed4ideDPx4QNAP7c=', key: 1 },
        { name: 'Andrey', id: 2, imgURL: 'https://android-obzor.com/wp-content/uploads/2022/02/1-9.jpg', key: 2 },
        { name: 'Sveta', id: 3, imgURL: 'https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg', key: 3 },
        { name: 'Sasha', id: 4, imgURL: 'https://kartinki.pics/uploads/posts/2022-02/1645848173_1-kartinkin-net-p-kartinki-devushek-multyashnie-1.jpg', key: 4 },
        { name: 'Viktor', id: 5, imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3gqot1XZJQ_p-vuyZRJTB_eZf93ClAf95w&usqp=CAU', key: 5 },
        { name: 'Valera', id: 6, imgURL: 'https://avatars.mds.yandex.net/i?id=bd7df532ef5d30ec4e22d68378da0c148dae2a51-8340026-images-thumbs&n=13', key: 6 },
    ],
    messagesDimych: [
        { message: 'Hi', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'How is your mood', whoseMess: "s.left", id: 2, key: 2 },
        { message: "i'm fine, thanks", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'Yo', whoseMess: "s.left", id: 4, key: 4 },
        { message: "I'm glad to hear you", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Rerum quibusdam doloribus  non.", whoseMess: "s.left", id: 6, key: 6 },
        { message: "Rerum quibusdam doloribus doloremque .", whoseMess: "s.right", id: 7, key: 7 },
        { message: "Rerum quibusdam doloribus doloremque non.", whoseMess: "s.left", id: 8, key: 8 },
        { message: " doloribus doloremque non.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Rerum quibusdam doloribus doloremque non.", whoseMess: "s.left", id: 10, key: 10 },
    ],
    messagesAndrey: [
        { message: 'Hey there!', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'What are you up to?', whoseMess: "s.left", id: 2, key: 2 },
        { message: "Just chilling, you?", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'Thinking about going for a walk.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "That sounds nice. It's a beautiful day outside.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "I wish I could join you, but I'm stuck with work.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Don\'t worry, we can plan something for the weekend.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'Sure, that sounds like a plan.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "Great! Let's catch up later then.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Absolutely. Take care!", whoseMess: "s.left", id: 10, key: 10 },
    ],
    messagesSveta: [
        { message: 'Good morning!', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'Morning! How did you sleep?', whoseMess: "s.left", id: 2, key: 2 },
        { message: "Not too bad, thanks for asking.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'I had a bit of trouble falling asleep.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "Maybe try some relaxation techniques before bed.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Yeah, I'll give that a shot tonight.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Let me know if it helps.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'Will do. Thanks!', whoseMess: "s.left", id: 8, key: 8 },
        { message: "No problem. Have a great day!", whoseMess: "s.right", id: 9, key: 9 },
        { message: "You too!", whoseMess: "s.left", id: 10, key: 10 },
    ],
    messagesSasha: [
        { message: 'Hey, how\'s it going?', whoseMess: 's.right', id: 1, key: 1 },
        { message: "Hey! I'm doing well, thanks.", whoseMess: "s.left", id: 2, key: 2 },
        { message: "That's good to hear.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'What about you?', whoseMess: "s.left", id: 4, key: 4 },
        { message: "I'm just relaxing at home.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "Sounds nice. Anything planned for today?", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Not really, just taking it easy.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'That sounds like a good day.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "Yeah, I need some downtime.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Absolutely. Enjoy!", whoseMess: "s.left", id: 10, key: 10 },
    ],
    messagesViktor: [
        { message: 'Hi there!', whoseMess: 's.right', id: 1, key: 1 },
        { message: 'Hello! How are you?', whoseMess: "s.left", id: 2, key: 2 },
        { message: "I'm doing great, thanks.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'That\'s good to hear.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "What about you?", whoseMess: "s.right", id: 5, key: 5 },
        { message: "I'm alright, just busy with work.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'I hope you\'re not too stressed.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'I manage.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "Well, take breaks when you can.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "Thanks, I will.", whoseMess: "s.left", id: 10, key: 10 },
    ],
    messagesValera: [
        { message: 'Hey, how have you been?', whoseMess: 's.right', id: 1, key: 1 },
        { message: "Hey! It's been a while.", whoseMess: "s.left", id: 2, key: 2 },
        { message: "Yeah, I've been busy lately.", whoseMess: "s.right", id: 3, key: 3 },
        { message: 'I can relate. Work has been hectic.', whoseMess: "s.left", id: 4, key: 4 },
        { message: "Hopefully, things calm down soon.", whoseMess: "s.right", id: 5, key: 5 },
        { message: "I'm keeping my fingers crossed.", whoseMess: "s.left", id: 6, key: 6 },
        { message: 'Let me know if you need any help.', whoseMess: 's.right', id: 7, key: 7 },
        { message: 'Thanks, I appreciate it.', whoseMess: "s.left", id: 8, key: 8 },
        { message: "No problem. We're in this together.", whoseMess: "s.right", id: 9, key: 9 },
        { message: "That's reassuring.", whoseMess: "s.left", id: 10, key: 10 },
    ],
    // chats: [],
}

// initialState.chats =  [
//     { path: "/1", whoseMessages: initialState.messagesDimych, formName: "Dima", key: 1},
//     { path: "/2", whoseMessages: initialState.messagesAndrey, formName: "Andrey", key: 2},
//     { path: "/3", whoseMessages: initialState.messagesSveta, formName: "Sveta", key: 3},
//     { path: "/4", whoseMessages: initialState.messagesSasha, formName: "Sasha", key: 4},
//     { path: "/5", whoseMessages: initialState.messagesViktor, formName: "Viktor", key: 5},
//     { path: "/6", whoseMessages: initialState.messagesValera, formName: "Valera", key: 6},
// ]


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case SEND_MESSAGE:
            const messagesLookup = {
                "Dima": state.messagesDimych,
                "Andrey": state.messagesAndrey,
                "Sveta": state.messagesSveta,
                "Sasha": state.messagesSasha,
                "Viktor": state.messagesViktor,
                "Valera": state.messagesValera
            };
            let messages = messagesLookup[action.formName]
            let newMessage = {
                message: action.newMessageText,
                whoseMess: "s.right",
                id: messages.length + 1,
                key: messages.length + 1
            };

            switch (action.formName) {
                case "Dima":
                    return {
                        ...state,
                        messagesDimych: [...state.messagesDimych, newMessage]
                    };
                case "Andrey":
                    return {
                        ...state,
                        messagesAndrey: [...state.messagesAndrey, newMessage]
                    };
                case "Sveta":
                    return {
                        ...state,
                        messagesSveta: [...state.messagesSveta, newMessage]
                    };
                case "Sasha":
                    return {
                        ...state,
                        messagesSasha: [...state.messagesSasha, newMessage]
                    };
                case "Viktor":
                    return {
                        ...state,
                        messagesViktor: [...state.messagesViktor, newMessage]
                    };
                case "Valera":
                    return {
                        ...state,
                        messagesValera: [...state.messagesValera, newMessage]
                    };
            }
        default: return state;

    }
}
export default dialogsReducer;
