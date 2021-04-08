import React from 'react';
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios'; //ипортируем всё что экспортируется в библиотеке axios с названием "axios" 
import preloader from '../../assets/images/Hourglass.gif'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { //response - ответ  
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged =(pageNumber) => {
        //диспатчим в стэйт номер страницы, потом сразу же выполняем запрос на сервер 
        //, по этому мы написали в get запросе page=pageNumber, т.к. в пропсах пока что старые значения, а pageSize нас менять не надо
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { //response - ответ , 
        this.props.toggleIsFetching(false);    
        this.props.setUsers(response.data.items)
        });
    }

    render() {

        return (
            <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}

            />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    })
}

// let mapDispatchToProps = (dispatch) => {
//     return ({
//         follow: (userID) => { dispatch(followAC(userID)) ;},
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) ;},
//         setUsers: (users) => { dispatch(setUsersAC(users)) ;},
//         setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber)); },
//         setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount)); },
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetching(isFetching)); }
//     })
// }

//connect сделает сам колбэки для Action Creator-ов, по этому передаём объект с свойствами, так же можно упростить код:
// let name=15;
// let obj = {
//     //если имя свойства совпадает с его значением , то можно написать просто name
//     //вместо name: name
//     name
// }



export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);