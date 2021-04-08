import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'; //ипортируем всё что экспортируется в библиотеке axios с названием "axios" 
import userPhoto from '../../assets/images/images.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { //response - ответ  
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged =(pageNumber) => {
        //диспатчим в стэйт номер страницы, потом сразу же выполняем запрос на сервер 
        //, по этому мы написали в get запросе page=pageNumber, т.к. в пропсах пока что старые значения, а pageSize нас менять не надо
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { //response - ответ , 
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        //расчет количества страниц и создание массива для этих номеров(math.ceil округление до целого числа в большую сторону)
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
            <div>
                { pages.map(p => {
                        return (<span className={ this.props.currentPage ===  p && s.selectedPage }
                            onClick={ (e) => { this.onPageChanged(p)  } } >{p}</span>)
                    })}

            </div>
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