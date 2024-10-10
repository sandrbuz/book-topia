import { profileAPI } from "../api/api";
import { setAuthUserAvatar } from "./auth-reducer";
import newPostImg from "./../assets/images/newPostImg.jpg"
import { ProfileType } from "../types/types";
import { ThunkAction } from "redux-thunk";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


type ActionTypes = DeletePostActionType | AddPostActionType | SetUserProfileActionType | SetStatusActionType | SavePhotoSuccessActionType

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number):DeletePostActionType => {
    return {
        type: DELETE_POST, postId
    }
}

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

export const addPost = (newPostText: AddPostActionType) => {
    return {
        type: ADD_POST, newPostText
    }
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: SetUserProfileActionType) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export const setStatus = (status: SetStatusActionType) => {
    return {
        type: SET_STATUS, status
    }
}

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: {
        small: string
        large: string
    }
}

export const savePhotoSuccess = (photos: SavePhotoSuccessActionType) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    }
}
// thunk creators
export const getUserProfile = (userId: any):ThunkAction<void, any, unknown, ActionTypes> => async (dispatch: any) => {
    if (userId) {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId: any) => async (dispatch: any) => {
    if (userId) {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }
}
export const updateStatus = (status: any) => async (dispatch: any, getState: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
        dispatch(setAuthUserAvatar(response.data.data.photos.small)) 
    }
}

type postType = { id: number; message: string; thumbnail: string }

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', thumbnail: "https://img.audiomania.ru/images/content/Avatar2.jpg" },
        { id: 2, message: 'It\'s my first page', thumbnail: "https://vibirai.ru/image/964470.jpg" },
        { id: 3, message: 'Blabla', thumbnail: "https://masterpiecer-images.s3.yandex.net/5ea0a1226dba11ee8461363fac71b015:upscaled" },
        { id: 4, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
        { id: 5, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
        { id: 6, message: 'Blabla', thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvP5IRQVvmbIYB57VXE8aENzgdymWgnMp7A&usqp=CAU" },
    ] as Array<postType>, //or postType[]

    profile:  null as ProfileType | null,   //as Object | null
    status: '' as string
}

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any):initialStateType => {


    switch (action.type) {
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
            if (state.profile) {
                return {
                    ...state,
                    profile: { ...state.profile, photos: action.photos }
                };
            }
            return state; // If profile is null, return the current state (4 lesson of samurai 2.0)

        default: return state
    }

}
export default profileReducer;

