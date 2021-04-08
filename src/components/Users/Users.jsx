import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/images.png';

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
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button> :
                                    <button onClick={() => { props.follow(u.id) }} >Follow</button>
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