import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_SEARCHED_USER_NAME = 'SET_SEARCHED_USER_NAME';
const SET_IS_RECIEVED_RESPONSE = 'SET_IS_RECIEVED_RESPONSE';


export const followSuccess = (userId) => {
    return {
        type: FOLLOW, userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}
export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE, pageNumber
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}
export const setSearchedUserName = (searchedUserName) => {
    return {
        type: SET_SEARCHED_USER_NAME, searchedUserName
    }
}
export const setIsReceivedResponse = (isReceivedResponse) => {
    return {
        type: SET_IS_RECIEVED_RESPONSE, isReceivedResponse
    }
}
//thunk creators
export const requestUsers = (page, pageSize, searchedUser) => {
    return async (dispatch) => {
        dispatch(setSearchedUserName(searchedUser));
        let response = await usersAPI.getUsers(page, pageSize, searchedUser)
        return dispatch(setUsers(response.items)),
            dispatch(setTotalUsersCount(response.totalCount)),
            dispatch(setIsReceivedResponse(true))
    }
}
export const follow = (userId, isAuth) => {
    return async (dispatch) => {
        if (isAuth) {
            dispatch(toggleFollowingProgress(true, userId))
            let response = await usersAPI.follow(userId)
            if (response.resultCode === 0) { dispatch(followSuccess(userId)) }
            dispatch(toggleFollowingProgress(false, userId))
        }

    }
}
export const unfollow = (userId, isAuth) => {
    return async (dispatch) => {
        if (isAuth) {
            dispatch(toggleFollowingProgress(true, userId))
            let response = await usersAPI.unfollow(userId)
            if (response.resultCode === 0) { dispatch(unfollowSuccess(userId)) }
            dispatch(toggleFollowingProgress(false, userId))
        }
    }
}

let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    searchedUserName: '',
    isReceivedResponse: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        case SET_SEARCHED_USER_NAME:
            return {
                ...state,
                searchedUserName: action.searchedUserName
            }
        case SET_IS_RECIEVED_RESPONSE:
            return {
                ...state,
                isReceivedResponse: action.isReceivedResponse
            }
        default:
            return state
    }
}
export default usersReducer;