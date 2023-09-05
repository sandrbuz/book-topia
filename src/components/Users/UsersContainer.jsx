import React from "react";
import UsersC from "./UsersC";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { followActionCreator, setCurrentPageAC, setTotalUsersCountAC, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
         users: state.usersPage.users,
         pageSize: state.usersPage.pageSize,
         totalUsersCount: state.usersPage.totalUsersCount,
         currentPage: state.usersPage.currentPage
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
       },
       setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount))
       },
       setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
      }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;

