import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyTestComp from './components/MyTestComp/MyTestComp';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import Message from './components/Dialogs/Message/Message';
import Post from './components/Profile/MyPosts/Post/Post';

// let dialogs = [
//   {name: 'Dimych', id: 1},
//   {name: 'Andrey', id: 2},
//   {name: 'Sveta', id: 3},
//   {name: 'Sasha', id: 4},
//   {name: 'Viktor', id: 5},
//   {name: 'Valera', id: 6},
//  ];

// let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

// let messages = [
//   {message: 'Hi'},
//   {message: 'How is your mood'},
//   {message: 'Yo'},
//   {message: 'Yo'},
//   {message: 'Yo'},
// ]; 

// let messagesElements = messages.map(m => <Message message={m.message}/>);


// let posts = [
//   {id: 1, message: 'Hi, how are you?', likesCount: 12},
//   {id: 2, message: 'It\'s my first page', likesCount: 11},
//   {id: 2, message: 'Blabla', likesCount: 10},
//   {id: 2, message: 'Blabla', likesCount: 1},
// ];

// let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)



const App = (props) => {
  


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile arrPosts={props.arrPosts}/>} />
            <Route path="/profile/" element={<Profile arrPosts={props.arrPosts}/>} />
            <Route exact path="/dialogs/*" element={<Dialogs arrMessages={props.arrMessages} arrDialogs={props.arrDialogs}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
