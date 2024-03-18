import React from 'react';
import { follow, unfollow, followSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollowSuccess, toggleFollowingProgress, requestUsers, setSearchedUserName } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getSearchedUserName, getIsReceivedResponse} from '../../redux/users-selectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.searchedUserName) 
    }

    // so that when login/logout the component is re-rendered. To change the clickability of buttons.
    componentDidUpdate(prevProps) {
        if (prevProps.isAuth !== this.props.isAuth) {
            this.props.requestUsers(this.props.currentPage, this.props.pageSize, this.props.searchedUserName);
        }
    }



    onPageChanged = (pageNumber) => {
        //setCurrentPage can be put in thunk(requestUsers)
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize, this.props.searchedUserName);
    }

    onSearchUser = async (values) => {
        await this.props.setCurrentPage(1);
        this.props.requestUsers(this.props.currentPage, this.props.pageSize, values);
    }




    render() {
        return (<>
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowSuccess={this.props.unfollowSuccess}
                followSuccess={this.props.followSuccess}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isAuth={this.props.isAuth}
                setSearchedUserName={this.props.setSearchedUserName}
                onSearchUser={this.onSearchUser}
                isReceivedResponse={this.props.isReceivedResponse}
            />
        </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        searchedUserName: getSearchedUserName(state),
        isReceivedResponse: getIsReceivedResponse(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingProgress,
        requestUsers,
        follow,
        unfollow,
        setSearchedUserName

    })
)(UsersContainer)

