import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {
    //расчет количества страниц и создание массива для этих номеров(math.ceil округление до целого числа в большую сторону)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (<span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }} >{p}</span>)
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.Users_grid}>
                        <div className={s.user_img_btn}>
                            <div>

                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            debugger;
                                            props.toggleFollowingProgress(true, u.id);
                                            usersAPI.unfollowUser(u.id)
                                                .then(data => { //response - ответ  
                                                    if (data.resaultCode == 0) {
                                                        props.follow(u.id);
                                                    }

                                                });
                                            props.toggleFollowingProgress(false, u.id);
                                          //  props.unfollow(u.id);

                                        }} >Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            debugger;
                                            props.toggleFollowingProgress(true, u.id);
                                            usersAPI.followUser(u.id)
                                                .then(data => { //response - ответ  
                                                    if (data.resaultCode == 0) {
                                                        props.follow(u.id);
                                                    }

                                                });
                                            props.toggleFollowingProgress(false, u.id);
                                          //  props.follow(u.id);

                                        }} >Follow</button>
                                }


                            </div>

                        </div>

                        <div className={s.user_description}>
                            <div className={s.userInfo_flex}>
                                <div className={s.UserInfo_element}>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div className={s.UserInfo_element}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>


                            </div>

                        </div>


                    </div>



                </div>)

            }



        </div>
    )
}

export default Users;