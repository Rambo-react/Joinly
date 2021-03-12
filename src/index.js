import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addMessage, addPost, subsribe, updateNewMessageText, updateNewPostText} from './redux/state';
import state from './redux/state';
import reportWebVitals from './reportWebVitals';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>

            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} 
            updateNewMessageText={updateNewMessageText}
            />

          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(state);

subsribe(rerenderEntireTree);










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











