import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";




let store =  {
    _state : {
        profilePage: {
    
            postsData: [
                { id: 1, message: "Hello? how are you?", likesCount: 0 },
                { id: 2, message: "It's my first post.", likesCount: 25 },
                { id: 3, message: "Yo", likesCount: 30 }
            ],
    
            newPostText : "Enter your post"
        },
    
        dialogsPage: {
    
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
    
        },
    
        siteBar: {
    
            friendsData: [
                { id: 1, name: "Oleg", urlImg: "https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" },
                { id: 2, name: "Artem", urlImg: "data:image/png;base64,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" },
                { id: 4, name: "Vasya", urlImg: "data:image/jpeg;base64,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" },
                { id: 5, name: "Katya", urlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtRBCgUWJ2OZDGFDFd_UUMV6igxUjEHKnXA&usqp=CAU" },
                { id: 6, name: "Sanya", urlImg: "data:image/jpeg;base64,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" }
    
            ]
        }
    },

    _callSubscriber() {
        console.log();
    },

    getState() {
        return (this._state);
    },

    /* ========================== MESSAGE*/
    // addMessage() { 

    //     let newMessage = {
    //         id: 5,
    //         message:  this._state.dialogsPage.newMessageText
    //     };
    
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },

    // updateNewMessageText(newText) { 
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._callSubscriber(this._state);  
    // },

    /* ========================== MYPOSTS*/
    // addPost() { 
    //     /*сюда пришел props из MyPosts.jsx из функции buttonAddPost , в которую мы прокинули эту функцию "addPost" через пропсы*/
    
        
    // },
    
    // updateNewPostText(newText) { 
    //     /*обновляем каждый символ в textarea через state и прокидываем через пропсы на событие onChange в value*/
    //     this._state.profilePage.newPostText = newText;
    //         this._callSubscriber(this._state);
      
    // },
    
    subsribe(observer) {
        this._callSubscriber = observer; /*переопределили функцию */
    },

    dispatch(action) { // передаём свойство type
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);

    }

}





export default store;
