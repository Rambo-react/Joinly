// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    
    <div className='app-wrapper'>
      <Header />
      <Navbar stateFriends={props.state.siteBar.friendsData} />
      <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs stateDialogs={props.state.dialogsPage} /> } />
          <Route path='/profile' render={ () => <Profile stateProfile={props.state.profilePage} addPost={props.addPost} /> } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
      </div>
    </div>
    
  );
}



export default App;
