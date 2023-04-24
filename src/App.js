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

let dialogs = [
  {name: 'Dimych', id: 1},
  {name: 'Andrey', id: 2},
  {name: 'Sveta', id: 3},
  {name: 'Sasha', id: 4},
  {name: 'Viktor', id: 5},
  {name: 'Valera', id: 6},
 ];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

let messages = [
  {message: 'Hi'},
  {message: 'How is your mood'},
  {message: 'Yo'},
  {message: 'Yo'},
  {message: 'Yo'},
]; 

let messagesElements = messages.map(m => <Message message={m.message}/>);


const App = (props) => {




  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile/" element={<Profile />} />
            <Route exact path="/dialogs/*" element={<Dialogs arrMessages={messagesElements} arrDialogs={dialogsElements}/>} />
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
