const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//state default

let InitialState = {
    
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Viktor" },
        { id: 3, name: "Petr" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Vladimir" },
        { id: 6, name: "Aleksey" }
    ],

    messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Are you fine?" },
        { id: 3, message: "What is your name?" },
        { id: 4, message: "Hello" }
    ],

    newMessageText : ""

};

const dialogsReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message:  state.newMessageText };
        
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default : return state;
    }
  
}

export const addMessageActionCreator = () => {
    return ({type:ADD_MESSAGE})
}

export const updateNewMessageTextActionCreator = (textMessage) => {
    return ({type:UPDATE_NEW_MESSAGE_TEXT,newText:textMessage})
}

export default dialogsReducer;