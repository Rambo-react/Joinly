import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
import reportWebVitals from './reportWebVitals';



let rerenderEntireTree = (state) => { /*state сюда передаём через функцию rerenderEntireTree(store.getState()); и дальше передаём в App */
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>

            <App state={state} dispatch={store.dispatch.bind(store)}
            />

          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(store.getState()); /* передаём state в  let rerenderEntireTree = (state) => { */

store.subsribe(rerenderEntireTree);










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











