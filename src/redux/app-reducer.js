import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {
    initilized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initilized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authMe());
        //выполнить после выполнения всех промисов
        promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        });

    }
}


export default appReducer;