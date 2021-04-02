const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

//стэйт по умолчанию
/*когда первый раз рендер происходит то приходит state = undefined т мы будем использовать стэйт по умолчанию , а потом будет уже рпиходить не пустой state*/

let InitialState = {
    users: [

        // { id: 1, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: true, fullName: "Igor", status: "I'am Best", location: { country: "Belarus", city: "Minsk" } },
        // { id: 2, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: false, fullName: "Oleg", status: "I'am Best of the best", location: { country: "Belarus", city: "Grodno" } },
        // { id: 3, urlImg: "https://cs8.pikabu.ru/post_img/big/2016/07/09/10/1468084255134888644.jpg", followed: true, fullName: "Valera", status: "I'am Best of the best of the best", location: { country: "Russia", city: "Smolensk" } }
    ]
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
            return {...state, users : [...state.users, ...action.users] } //[...state.users, ...action.users] склейка двух массивов спрэт оператором 
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

export default usersReducer;