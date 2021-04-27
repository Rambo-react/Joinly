 import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) {
     return  <Preloader />
    }

    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <DialogsContainer />} />
          {/* :userId - озночает что у нас есть какие-то параметры, ? - озночает что это не обязательный параметр */}
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />

        </div>
      </div>

    )
  }

}

const mapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
)

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

let MainApp = (props) => {
  return (
    <BrowserRouter>
          
    <Provider store={store}>
    <AppContainer  />
    </Provider>

  </BrowserRouter>
  )
}

export default MainApp;