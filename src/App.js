import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import NavFriendsContainer from './components/NavFriends/NavFriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import LoginFooter from './components/LoginFooter/LoginFooter';



export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


const App = (props) => {
  

  useEffect(() => {
    props.initializeApp();
  }, [])


  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <Navbar currentDialogId={props.currentDialogId}/>
      <div className="app-wrapper-content" >
        <Routes>
          <Route path="/profile/:userId?/" element={<ProfileContainer />} />
          <Route exact path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="*" element={<h2>Not found</h2>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <NavFriendsContainer />
      <LoginFooter />
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  currentDialogId: state.dialogsPage.currentDialogId
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

