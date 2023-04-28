import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first page', likesCount: 11},
  {id: 2, message: 'Blabla', likesCount: 10},
  {id: 2, message: 'Blabla', likesCount: 1},
];

let dialogs = [
  {name: 'Dimych', id: 1},
  {name: 'Andrey', id: 2},
  {name: 'Sveta', id: 3},
  {name: 'Sasha', id: 4},
  {name: 'Viktor', id: 5},
  {name: 'Valera', id: 6},
 ];

let messages = [
  {message: 'Hi'},
  {message: 'How is your mood'},
  {message: 'Yo'},
  {message: 'Yo'},
  {message: 'Yo'},
]; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App arrPosts={posts} arrMessages={messages} arrDialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
