import { NavLink } from 'react-router-dom';

import MyFriendsContainer from './MyFriends/MyFriendsContainer';
import s from './Navbar.module.css';


const Navbar = (props) => {
  
  return (
    <div>
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
      </div>
    </nav>

    <div className={s.Friends}>
      <MyFriendsContainer />
      
    </div>

    </div>
  );
}

export default Navbar;