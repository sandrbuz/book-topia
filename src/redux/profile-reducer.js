import { profileAPI, usersAPI } from "../api/api";
import { setAuthUserAvatar } from "./auth-reducer";
import newPostImg from "./../assets/images/newPostImg.jpg"

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}
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
        { id: 1, message: 'Hi, how are you?', thumbnail: "https://img.audiomania.ru/images/content/Avatar2.jpg" },
        { id: 2, message: 'It\'s my first page', thumbnail: "https://vibirai.ru/image/964470.jpg" },
        { id: 3, message: 'Blabla', thumbnail: "https://masterpiecer-images.s3.yandex.net/5ea0a1226dba11ee8461363fac71b015:upscaled" },
        { id: 4, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
        { id: 5, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
        { id: 6, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
    ],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        //debugger; //в devtools f11 войти в метод
        case ADD_POST:
            const maxId = state.posts.reduce((max, post) => Math.max(post.id, max), 0);
            let newPost = {
                id: maxId+1,
                message: action.newPostText,
                likesCount: 0,
                key: maxId+1,
                thumbnail: newPostImg
            };
            return {
                ...state,
                posts: [newPost,...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
                profile: { ...state.profile, photos: action.photos },
            }


        default: return state
    }

}
export default profileReducer;

