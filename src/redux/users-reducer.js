const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';


//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export const followAC = (userID) => {
    return ({ type: FOLLOW, userID })
}
export const unfollowAC = (userID) => {
    return ({ type: UNFOLLOW, userID })
}

export const setUsersAC = (users) => {
    return ({ type: SET_USERS, users})
}

//если в объекте свойство = переменной, то можно свойство опускать(одноименные) 
//было бы: return ({ type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setCurrentPageAC = (currentPage) => {
    return ({ type: SET_CURRENT_PAGE, currentPage})
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount})
}


export default usersReducer;