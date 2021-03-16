const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    
    postsData: [
        { id: 1, message: "Hello? how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post.", likesCount: 25 },
        { id: 3, message: "Yo", likesCount: 30 }
    ],

    newPostText : "Enter your post"
};
 

const profileReducer = (state = InitialState, action) => {
  
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message:  state.newPostText,
                likesCount: 0 };
        
            state.postsData.push(newPost);
            state.newPostText = ''; 
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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


export default profileReducer;