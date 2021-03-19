import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import StoreContext from './StoreContext';




let rerenderEntireTree = () => { /*state сюда передаём через функцию rerenderEntireTree(store.getState()); и дальше передаём в App */
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>

            <StoreContext.Provider value={store}>
            <App  />
            </StoreContext.Provider>

          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderEntireTree(); /* передаём state в  let rerenderEntireTree = (state) => { */


  /*(подписчик/subscribe) срабатывает когда стэйт изменился, и мы запрашиваем стэйт и передаём его в рередренинг*/
store.subscribe( () => {
  
  rerenderEntireTree();
} );










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











