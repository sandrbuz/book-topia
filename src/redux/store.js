import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first page', likesCount: 11 },
                { id: 3, message: 'Blabla', likesCount: 10 },
                { id: 4, message: 'Blabla', likesCount: 1 },
            ],
            newPostText: ""

        },
        dialogsPage: {
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

        },
        sidebarPage: {
            friends: [
                { name: "Andrew", imgUrl: "https://android-obzor.com/wp-content/uploads/2022/02/1-9.jpg" },
                { name: "Sasha", imgUrl: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg" },
                { name: "Sveta", imgUrl: "https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg" },
            ]
        },
    },
    _callSubscriber() {
        alert('rerender') // any function that is overridden in the observer below in the "subscribe" function
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },

    // addPost() {
    //     //debugger; //в devtools f11 войти в метод
    //     let newPost = {
    //         id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
    //         // id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);   //add a post
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state); //redraw the tree

    // },
    //  updateNewPostText(newText) {
    // //     this._state.profilePage.newPostText = newText;
    // //     // alert(state.profilePage.newPostText);
    // //     this._callSubscriber(this._state); //redraw the tree

    //  },
    // addMessage() {
    //     let newMessage = {
    //         message: this._state.dialogsPage.newMessageText,
    //         whoseMess: "s.right",

    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = ''; 
    //     this._callSubscriber(this._state); //redraw the tree
    // },
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     // alert(state.profilePage.newPostText);
    //     this._callSubscriber(this._state); //redraw the tree
    // },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = sidebarReducer(this._state.navbarPage, action)
        this._callSubscriber(this.getState());
    }
}

export default store;
window.store = store;
