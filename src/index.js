import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/state'; 
import store from './redux/redux-store'; 
// import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
// import { updateNewPostText } from './redux/state';
// import { addMessage } from './redux/state';
// import { updateNewMessageText } from './redux/state';
import StoreContext from './StoreContext';
// import { Provider } from './StoreContext';
import { Provider } from 'react-redux';



// let posts = [
//   {id: 1, message: 'Hi, how are you?', likesCount: 12},
//   {id: 2, message: 'It\'s my first page', likesCount: 11},
//   {id: 2, message: 'Blabla', likesCount: 10},
//   {id: 2, message: 'Blabla', likesCount: 1},
// ];

// let dialogs = [
//   {name: 'Dimych', id: 1},
//   {name: 'Andrey', id: 2},
//   {name: 'Sveta', id: 3},
//   {name: 'Sasha', id: 4},
//   {name: 'Viktor', id: 5},
//   {name: 'Valera', id: 6},
//  ];

// let messages = [
//   {message: 'Hi'},
//   {message: 'How is your mood'},
//   {message: 'Yo'},
//   {message: 'Yo'},
//   {message: 'Yo'},
// ]; 

// addPost();
const root = ReactDOM.createRoot(document.getElementById('root')); //in lesson 34, I removed this variable from the rerenderEntireTree function, because in the textarea in the MyPosts file, after entering each letter, the page was reloaded



root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
    <App /*dispatch={store.dispatch.bind(store)}*/ /*state={state}*/ /*store={store}*/ /* addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}*//> 
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// console.log(store.addPost);


 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 