import { authAPI, usersAPI} from "../api/api";
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_AVATAR = 'SET_AUTH_USER_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export const setAuthUserData = (id, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: { id, email, login }
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
// thunk creators
export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login))
                // request for additional data (for user photo)
                usersAPI.getProfile(id)
                    .then(data => {
                        return dispatch(setAuthUserAvatar(data.photos.small))
                    })
                dispatch(toggleIsFetching(false))
            }
        })
        dispatch(toggleIsFetching(false))

}

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    // isFetching: false 
    avatarSmall: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

        default: return state;

    }

}
export default authReducer;
