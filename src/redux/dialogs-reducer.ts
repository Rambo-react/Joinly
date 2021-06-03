const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//state default

type DialogsDataType = {
    id: number
    name: string
}

type MessagesDataType = {
    id: number
    message: string
}

let InitialState = {

    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Viktor" },
        { id: 3, name: "Petr" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Vladimir" },
        { id: 6, name: "Aleksey" }
    ] as Array<DialogsDataType>,

    messagesData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "Are you fine?" },
        { id: 3, message: "What is your name?" },
        { id: 4, message: "Hello" }
    ] as Array<MessagesDataType>,

}

export type InitialStateType = typeof InitialState

const dialogsReducer = (state = InitialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = { id: 5, message: action.newMessageText };
            //сразу возвращаем, скопированный стейт, добавляем в конец массива объект newMessage и очищаем текст newMEssageText
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }

        default: return state;
    }

}

type addMessageType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessage = (newMessageText: string) => {
    return ({ type: ADD_MESSAGE, newMessageText })
}
//action с свйоствами type и newText, которые приходят из Dialogs
// export const updateNewMessageTextActionCreator = (textMessage) => {
//     return ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: textMessage })
// }

export default dialogsReducer