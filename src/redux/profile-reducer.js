import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';




//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    postsData: [
        { id: 1, message: "Hello? how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post.", likesCount: 25 },
        { id: 3, message: "Yo", likesCount: 30 }
    ],
    // newPostText: "Enter your post !",
    profile: null,
    status: ""
};


const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, message: action.postText, likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
                // newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state, postsData: state.postsData.filter((p) => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }

}

export const addPost = (postText) => {
    return ({ type: ADD_POST, postText })
}
export const deletePost = (postId) => {
    return ({ type: DELETE_POST, postId })
}
export const savePhotoSuccess = (photos) => {
    return ({ type: SAVE_PHOTO_SUCCESS, photos })
}
export const setUserProfile = (profile) => {
    return ({ type: SET_USER_PROFILE, profile })
}
export const setStatus = (status) => {
    return ({ type: SET_STATUS, status })
}

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profileData)

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        //dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}  }));  // что бы подсвечивалось определённое поле, если распарсить сообщение ошибки , то там есть слово facebook и можно сделать что бы опдвечивалось поле в котором ошибка 
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0])


    }
}



export default profileReducer;