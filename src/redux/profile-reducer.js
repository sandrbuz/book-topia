import { profileAPI, usersAPI } from "../api/api";
import { setAuthUserAvatar } from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
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
        dispatch(setStatus(status)) 
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos)) 
        dispatch(setAuthUserAvatar(response.data.data.photos.small)) //so that when you change your avatar to profile, the thumbnail in the header changes immediately
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
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }


        default: return state
    }
    // return state;
}
export default profileReducer;

