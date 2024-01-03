import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes, useParams,useLocation,useNavigate } from 'react-router-dom';
import NavFriendsContainer from './components/NavFriends/NavFriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/Login';
import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

// import UsersC from './components/Users/UsersC';

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
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      // let history = useHistory(); 
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
}


  render() {
    if(!this.props.initialized){
        return <Preloader/>
    }
    return (
      // <BrowserRouter>
      <div className='app-wrapper'>
        {/* <Header /> */}
        <HeaderContainer />
        <Navbar />


        <div className="app-wrapper-content">
          <Routes>
            <Route index element={<ProfileContainer />}/> 

            {/* <Route path="/" element={<Profile stateProfilePage={props.state.profilePage} addPost={props.addPost}/>} /> */}
            {/* <Route path="/profile/*" element={<ProfileContainer /*store={props.store}*/ /* dispatch={props.dispatch} */ /*stateProfilePage={props.state.profilePage}*/ /*addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} /> */}
            <Route path="/profile/:userId?/" element={<ProfileContainer />} />
            {/* <Route path="/profile/" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route> */}

            <Route exact path="/dialogs/*" element={<DialogsContainer
            /*store={props.store}*/
            // dispatch={props.dispatch} stateDialogsPage={props.state.dialogsPage}  
            //addMessage={props.addMessage} 
            //updateNewMessageText={props.updateNewMessageText}
            />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="*" element={<h2>Not found</h2>} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/" element={<ProfileContainer />} /> */}
            {/* <Route path="/test1" element={<MyTestComp teext="gggg"/>} /> */}
          </Routes>
        </div>

        <NavFriendsContainer /> {/* used to be invested in navbar */}

      </div>
      // </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
  withRouter, //wrapped in WithRouter as in the video. Although I have no problems without it
  connect(mapStateToProps, {initializeApp})
  )(App)

