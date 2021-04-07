import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'; //ипортируем всё что экспортируется в библиотеке axios с названием "axios" 
import userPhoto from '../../assets/images/images.png';

class Users extends React.Component {
    
    componentDidMount () {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //response - ответ , 
                this.props.setUsers(response.data.items)
            });
    }


    //Есл в конструкторе ничего не выполняется кроме super(props), то его можно не писать 
    //конструирование объекта происходит одни раз. Если в рамках этой страницы происходят изменения(перерисовывается jsx) - то консруирование новое не происходит. 
    // constructor(props) {
    //     super(props);
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //response - ответ , 
    //             this.props.setUsers(response.data.items)
    //         });
        
    // }


    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //response - ответ , 
    //             this.props.setUsers(response.data.items)
    //         });
    //         //users
    //     }

    // }

 
    render() {
        return (<div>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={s.Users_grid}>
                        <div className={s.user_img_btn}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button> :
                                    <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
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
    
    
    
        </div>)
    }
}

export default Users;