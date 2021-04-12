const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    postsData: [
        { id: 1, message: "Hello? how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post.", likesCount: 25 },
        { id: 3, message: "Yo", likesCount: 30 }
    ],
    newPostText: "Enter your post",
    profile:null
};


const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, message: state.newPostText, likesCount: 0 };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return ({ type: ADD_POST })
}

export const updateNewPostTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_POST_TEXT, newText: text })
}
export const setUserProfile = (profile) => {
    return ({ type: SET_USER_PROFILE, profile })
}



export default profileReducer;