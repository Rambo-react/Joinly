const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS';



//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true, 
    followingInProgress: []
};


const usersReducer = (state = InitialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return (u)
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users : action.users } 
            //[...state.users, ...action.users] склейка двух массивов спрэт оператором 
            //поменял на : перезатираю массив юзеров
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage : action.currentPage }  
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount : action.totalUsersCount }  
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching : action.isFetching }  
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingInProgress : action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId) 
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => {
    return ({ type: FOLLOW, userID })
}
export const unfollow = (userID) => {
    return ({ type: UNFOLLOW, userID })
}

export const setUsers = (users) => {
    return ({ type: SET_USERS, users})
}

//если в объекте свойство = переменной, то можно свойство опускать(одноименные) 
//было бы: return ({ type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCurrentPage = (currentPage) => {
    return ({ type: SET_CURRENT_PAGE, currentPage})
}

export const setTotalUsersCount = (totalUsersCount) => {
    return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount})
}

export const toggleIsFetching = (isFetching) => {
    return ({ type: TOGGLE_IS_FETCHING, isFetching})
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
}


export default usersReducer;