import React, { Component, Suspense } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './components/hoc/withSuspense';


// сборщик(webpack) запросит эти компоненты с сервера при необходимости(ускоряет первый старт приложения)
// не собирает в общий bundle (первый загрузочный файл)
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
  
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("some error occured");
  }

  //метот жизненного цикла componentDidMount
  //срабатывает один раз (когда компонент вмонтируется)
  componentDidMount() {
    this.props.initializeApp();
    //дабвляем слушателя на промисы которые отработали с ошибкой и преедаём колбэк с алертом
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    //когда компонент удаляется , удалим и нашего слушаетля с глобального window
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }


  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* Switch работает как case , выбирает первый совпавший url и дальше не смотрит
           т.е. желательно уточненные адреса указывать вначале(/login/facebook), обобщенные вконце (/login) 
           так же EXACT описан внизу
           */}
          <Switch>
           
            {/* Если в урле стоит / (стартовая страница), то делаем редирект на страницу профайл */}
            <Route exact path='/' render={ () => <Redirect to={"/profile"} />} />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            {/* :userId - озночает что у нас есть какие-то параметры, ? - озночает что это не обязательный параметр */}
            <Route path='/profile/:userId?' render={() => {
              return (
                <Suspense fallback={<div> Loading ...</div>} >
                  <ProfileContainer />
                </Suspense>
              )
            }} />

            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />

            <Route path='/users' render={() => <UsersContainer pageTitle = {"Users Title"}/>} />

            {/* <Route path='/login/facebook' render={() => <div>Facebook</div>} /> */}

            <Route path='/login' render={() => <Login />} />

            {/* <Route exact path='/login' render={() => <Login />} />
          EXACT используется если мы хоти отобразить компонент с точным совпадением URL
          т.е. если будет /login/facebook то уже ничего не отобразится */}

            {/* для ошибки */}
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />

          </Switch>
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


//AppContainer - результат функции compose над компонентом App
//compose - один за одним применяет Хоки - компоненты высшего порядка(HOC-High Order Component) 
//HOC - функция которая принимает один компонент (что-то делает с ним) и возвращает другой компонент(контейнерный компонент над входящим компонентом)
//для того что бы дать какие-то возможности/способности/данные компоненту который пришел на вход
//connect - даёт данные из стора(store), при помощи mapStateToProps и mapDispatchToProps
//withRouter - так же создаёт контейнерный компонент, который передаёт в компонент информацию из URL (роутинга)
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let MainApp = (props) => {
  return (
    // HashRouter - что бы добавить /#/ в УРЛ , т.е. сервак будет думать что index.html сидит в папке до # , что бы на гит пэйдже нормально отображалось
    // компоненты могут брать данные из PROPS, локального стейта, а так же из какого-то контекста который сформировали родительские компоненты
    // Provider - является родителем для всех компонентов которые внутри AppContainer
    // в глобальный контекст кладёт store
    // и любой компонент внутри провайдера может стать потребителем(Consumer) этого контекста и достать sotre, что бы не прокидывать всё через пропсы
    // через провайдер желательно прокидывать (глобальный стор, темы сайта (светлая/темная), язык интерфейса и т.д.)
    <BrowserRouter basename={process.env.PUBLIC_URL}>


      <Provider store={store}>
        <AppContainer />
      </Provider>

    </BrowserRouter>
  )
}

export default MainApp;