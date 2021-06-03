// import { authAPI } from "../api/api";
// import { stopSubmit } from "redux-form";
import { authMe } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

//обьявил тип 
export type InitialStateType = {
    initialized: boolean
}

//присвоил тип 
let initialState: InitialStateType = {
    initialized: false
}


const appReducer = (state = initialState, action: any): InitialStateType  => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => {
    return (dispatch:any) => {
        let promise = dispatch(authMe());
        //выполнить после выполнения всех промисов
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        });

    }
}


export default appReducer