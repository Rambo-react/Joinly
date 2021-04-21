import { createSelector } from "reselect";

//примитивный селектор для getUsersSuperSelector
const getAllUsersSelector =(state)=> {
    return state.usersPage.users;
}
//если супер селектор зависит от двух и больше селекторов, то через запятую
//export const getUsersSuperSelector = createSelector(getAllUsersSelector,getIsFetching, (users, isFetching) => {

//первый параметр название селектора, второй функция с возвращаемыми параметрами (данными)
export const getUserAll = createSelector(getAllUsersSelector, (users) => {
   return users.filter(u => true);
})

export const getPageSize =(state)=> {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount =(state)=> {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage =(state)=> {
    return state.usersPage.currentPage;
}
export const getIsFetching =(state)=> {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress =(state)=> {
    return state.usersPage.followingInProgress;
}