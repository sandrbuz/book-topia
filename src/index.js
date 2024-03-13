import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/state'; 
import store from './redux/redux-store';
// import {addPost} from './redux/state';
import { BrowserRouter, Routes } from 'react-router-dom';
// import { updateNewPostText } from './redux/state';
// import { addMessage } from './redux/state';
// import { updateNewMessageText } from './redux/state';
// import StoreContext from './StoreContext';
// import { Provider } from './StoreContext';
import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root')); //in lesson 34, I removed this variable from the rerenderEntireTree function, because in the textarea in the MyPosts file, after entering each letter, the page was reloaded


// let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// }

// console.log(store.addPost);
// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 