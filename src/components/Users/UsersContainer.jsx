import React from 'react';
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUserAll} from "../../redux/users-selectors"

class UsersContainer extends React.Component {
debugger
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChanged =(pageNumber) => {
        let {pageSize} =  this.props;
        //диспатчим в стэйт номер страницы, потом сразу же выполняем запрос на сервер 
        //, по этому мы написали в get запросе page=pageNumber, т.к. в пропсах пока что старые значения, а pageSize нам менять не надо
        this.props.getUsers(pageNumber, pageSize);


          this.props.setCurrentPage(pageNumber);
        

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
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            
            />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return ({
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     })
// }
let mapStateToProps = (state) => {
    return ({
        users: getUserAll(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    })
}

// let mapDispatchToProps = (dispatch) => {
//     return ({
//         follow: (userID) => { dispatch(followAC(userID)) ;},
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) ;},
//         setUsers: (users) => { dispatch(setUsersAC(users)) ;},
//         setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber)); },
//         setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountAC(totalUsersCount)); },
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetching(isFetching)); },
//         toggleFollowingProgress
//     })
// }

//connect сделает сам колбэки для Action Creator-ов, по этому передаём объект с свойствами, так же можно упростить код:
// let name=15;
// let obj = {
//     //если имя свойства совпадает с его значением , то можно написать просто name
//     //вместо name: name
//     name
// }

// export default connect(mapStateToProps, {follow, unfollow, 
//     setUsers, setCurrentPage, setTotalUsersCount, 
//     toggleIsFetching, toggleFollowingProgress, getUsers})(UsersContainer);

    export default compose (
        // withAuthRedirect,
        connect(mapStateToProps, {follow, unfollow, 
            setUsers, setCurrentPage, setTotalUsersCount, 
            toggleIsFetching, toggleFollowingProgress, getUsers})
    ) (UsersContainer);