import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return (
      <header className={s.header}>
        <img src="https://w7.pngwing.com/pngs/973/11/png-transparent-logo-phoenix-illustration-phoenix-logo-design-phoenix-illustration-free-logo-design-template-photography-orange.png" ></img>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to ={'/login'}>Login </NavLink>}

         
          </div> 
      </header>
    );
}

export default Header;