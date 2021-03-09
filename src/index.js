import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Viktor" },
  { id: 3, name: "Petr" },
  { id: 4, name: "Igor" },
  { id: 5, name: "Vladimir" },
  { id: 6, name: "Aleksey" }
];

let MessagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Are you fine?" },
  { id: 3, message: "What is your name?" },
  { id: 4, message: "Hello" }
];

let postsData = [
  {id: 1, message: "Hello? how are you?", likesCount:0},
  {id: 1, message: "It's my first post.", likesCount:25},
  {id: 1, message: "Yo", likesCount:30}
]

ReactDOM.render(
  <React.StrictMode>
    <App DialogsData={DialogsData} MessagesData={MessagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
