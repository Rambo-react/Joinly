import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';




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

        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     }

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

// export const updateNewPostText = (text) => {
//     return ({ type: UPDATE_NEW_POST_TEXT, newText: text })
// }

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





export default profileReducer;