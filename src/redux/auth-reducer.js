import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_AVATAR = 'SET_AUTH_USER_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_IS_AUTH_FALSE = 'SET_IS_AUTH_FALSE';

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: { id, email, login, isAuth } //"payload" used to be called "data"
    }
}
export const setAuthUserAvatar = (avatar) => {
    return {
        type: SET_AUTH_USER_AVATAR,
        avatar
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
// export const setIsAuthFalse = (isAuth) => {
//     return {
//         type: SET_IS_AUTH_FALSE, isAuth
//     }
// }
// thunk creators
export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true))
                // request for additional data (for user photo)
                usersAPI.getProfile(id)
                    .then(data => {
                        return dispatch(setAuthUserAvatar(data.photos.small))
                    })
                dispatch(toggleIsFetching(false))
            } //else {dispatch(setIsAuthFalse(false))}
        })
    dispatch(toggleIsFetching(false))
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', { _error: message }));
            }
        })
    // .then(() => { 
    //     window.location.reload();
    // })  //added by myself on 78 lesson. --- in lesson 79 I understood why the redirect (or page refresh) does not occur. Because in thunks "login" and "logout" it was necessary to refer not to "respose.resultCode" but to "response.data.resultCode"
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
        // .then(() => { //added by myself
        //     window.location.reload();
        // })
}

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false, //can be changed to true
    // isFetching: false 
    avatarSmall: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,   //"payload" used to be called "data"
                // isAuth: true
            };
        case SET_AUTH_USER_AVATAR:
            return {
                ...state,
                avatarSmall: action.avatar
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        // case SET_IS_AUTH_FALSE:
        //     return {
        //         ...state,
        //         isAuth: action.isAuth
        //     }

        default: return state;

    }

}
export default authReducer;
