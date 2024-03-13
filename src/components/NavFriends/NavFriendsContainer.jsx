import React from 'react';
import NavFriends from './NavFriends';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
       friends: state.sidebar.friends
    }
 }
 let mapDispatchToProps = (dispatch) => {
    return {
    }
 }
 
  let NavFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavFriends);
 
 
 export default NavFriendsContainer;