import { UsersType } from './../types/types';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/


let InitialState = {
    users: [] as Array<UsersType>,
    pageSize: 5 ,
    totalUsersCount: 0 ,
    currentPage: 1 ,
    isFetching: true ,
    followingInProgress: [] as Array<number> //array of users id
};

type InitialStateType = typeof InitialState;


const usersReducer = (state = InitialState, action:any):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:true})

                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return { ...u, followed: true }
                //     }
                //     return (u)
                // })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return { ...u, followed: false }
                //     }
                //     return u
                // })


            }
        case SET_USERS: {
            return { ...state, users: action.users }
            //[...state.users, ...action.users] склейка двух массивов спрэт оператором 
            //поменял на : перезатираю массив юзеров
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId:number
}

export const followSuccess = (userId:number):FollowSuccessActionType => {
    return ({ type: FOLLOW, userId })
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId:number
}

export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => {
    return ({ type: UNFOLLOW, userId })
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users : Array<UsersType>
}

export const setUsers = (users:Array<UsersType>) :SetUsersActionType  => {
    return ({ type: SET_USERS, users })
}

//если в объекте свойство = переменной, то можно свойство опускать(одноименные) 
//было бы: return ({ type: SET_CURRENT_PAGE, currentPage: currentPage})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage:number):SetCurrentPageActionType => {
    return ({ type: SET_CURRENT_PAGE, currentPage })
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCountActionType => {
    return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => {
    return ({ type: TOGGLE_IS_FETCHING, isFetching })
}

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followInProgress: boolean
    userId: number
}

export const toggleFollowingProgress = (followInProgress:boolean, userId:number):ToggleFollowingProgressActionType => {
    return ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followInProgress, userId })
}


export const getUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)

    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}


export const follow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer