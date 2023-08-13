import React from "react";
import Users from "./Users";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
         users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      
       follow: (userId) => {
         dispatch(followActionCreator(userId))
       },
       unfollow: (userId) => {
        dispatch(unfollowActionCreator(userId))
       },
       setUsers: (users) => {
        dispatch(setUsersActionCreator(users))
       }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
