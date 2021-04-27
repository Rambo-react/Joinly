import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div key={user.id}>
            <div className={s.Users_grid}>
                <div className={s.user_img_btn}>
                    <div>

                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>

                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)}

                                onClick={() => {

                                    unfollow(user.id)


                                }} >Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id == user.id)}

                                onClick={() => {

                                    follow(user.id)

                                }} >Follow</button>
                        }


                    </div>

                </div>

                <div className={s.user_description}>
                    <div className={s.userInfo_flex}>
                        <div className={s.UserInfo_element}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.UserInfo_element}>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>


                    </div>

                </div>


            </div>



        </div>
    )







}

export default User;