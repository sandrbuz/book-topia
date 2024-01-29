import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPost = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
// thunk creators
export const getUserProfile = (userId) => async (dispatch) => {
    if (userId) {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId) => async (dispatch) => {
    if (userId) {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status)) //response.data.data
    }
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first page', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 10 },
        { id: 4, message: 'Blabla', likesCount: 1 },
    ],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {

    // let stateCopy = { ...state };

    switch (action.type) {
        //debugger; //в devtools f11 войти в метод
        case ADD_POST:
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                // id: 5,
                message: action.newPostText,
                likesCount: 0,
                key: state.posts[state.posts.length - 1].id + 1
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);   //add a post
            // stateCopy.newPostText = '';
            // return stateCopy;
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }


        default: return state
    }
    // return state;
}
export default profileReducer;

