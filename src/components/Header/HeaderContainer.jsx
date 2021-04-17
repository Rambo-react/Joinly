import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, authMe } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';



class HeaderContainer extends React.Component {
    componentDidMount () {
      // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
     

      this.props.authMe();
      // authAPI.getAuthMe()
      //   .then(data => { //response - ответ  
      //       if (data.resultCode === 0) {
      //         let {id, email, login} = data.data;
      //         this.props.setAuthUserData(id, email, login);
      //       }
      //   });
    }

    render () {
      return <Header {...this.props} />
    }
    
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default  connect(mapStateToProps, {setAuthUserData, authMe}) (HeaderContainer);