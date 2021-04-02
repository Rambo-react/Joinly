import s from './Users.module.css'


const Users = (props) => {

    if (props.users.length === 0) {
        
        props.setUsers(
        [ { id: 1, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: true, fullName: "Igor", status: "I'am Best", location: { country: "Belarus", city: "Minsk" } },
        { id: 2, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: false, fullName: "Oleg", status: "I'am Best of the best", location: { country: "Belarus", city: "Grodno" } },
        { id: 3, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: true, fullName: "Valera", status: "I'am Best of the best of the best", location: { country: "Russia", city: "Smolensk" } } ]
        ) //users
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={s.Users_grid}>
                    <div className={s.user_img_btn}>
                        <div>
                            <img src={u.urlImg} />
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.UserInfo_element}>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>


                        </div>

                    </div>


                </div>



            </div>)

        }



    </div>)
}

export default Users;