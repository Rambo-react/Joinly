import { AppStateType } from './redux-store';
import { createSelector } from "reselect";

//примитивный селектор для getUsersSuperSelector
const getAllUsersSelector =(state: AppStateType)=> {
    return state.usersPage.users;
}
//если супер селектор зависит от двух и больше селекторов, то через запятую
//export const getUsersSuperSelector = createSelector(getAllUsersSelector,getIsFetching, (users, isFetching) => {

//первый параметр название селектора, второй функция с возвращаемыми параметрами (данными)
export const getUserAll = createSelector(getAllUsersSelector, (users) => {
   return users.filter(u => true);
})

export const getPageSize =(state:AppStateType)=> {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount =(state:AppStateType)=> {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage =(state:AppStateType)=> {
    return state.usersPage.currentPage;
}
export const getIsFetching =(state:AppStateType)=> {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress =(state:AppStateType)=> {
    return state.usersPage.followingInProgress;
}