import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/images.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "6fb28e57-56fc-4c74-a4a4-e20e0a14b74e"
                                            }
                                        })
                                            .then(response => { //response - ответ  
                                                if (response.data.resaultCode == 0) {
                                                    props.follow(u.id);
                                                }

                                            });

                                        props.unfollow(u.id);

                                    }} >Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "6fb28e57-56fc-4c74-a4a4-e20e0a14b74e"
                                            }
                                        })
                                            .then(response => { //response - ответ  
                                                if (response.data.resaultCode == 0) {
                                                    props.follow(u.id);
                                                }

                                            });

                                        props.follow(u.id);

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