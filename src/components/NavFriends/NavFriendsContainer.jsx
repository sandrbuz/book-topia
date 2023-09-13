import React from 'react';
import NavFriends from './NavFriends';
import { connect } from 'react-redux';


// let Friends = [
//     {name: "Andrew", imgUrl: "https://android-obzor.com/wp-content/uploads/2022/02/1-9.jpg"},
//     {name: "Sasha", imgUrl: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg"},
//     {name: "Sveta", imgUrl: "https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg"},
// ]



let mapStateToProps = (state) => {
    return {
       friends: state.sidebar.friends
    }
 }
 let mapDispatchToProps = (dispatch) => {
    return {
    }
 }
 
  let SuperNavFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavFriends);
 
 
 export default SuperNavFriendsContainer;