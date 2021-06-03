import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'Joinly/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'Joinly/auth/GET_CAPTCHA_URL_SUCCESS';

// export type initialStateType = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
//     captchaUrl: string | null  // if null, then captcha is not required
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null  // if null, then captcha is not required
}

export type InitialStateType = typeof initialState;


const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }

        default:
            return state;
    }
}

type SetAuthUserDataACtionTypePauloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataACtionTypePauloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login:string | null, isAuth:boolean): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string 
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl });

export const authMe = () => async (dispatch:any) => {
    const response = await authAPI.getAuthMe()

    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}


export const login = (email: string, password: string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(authMe());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }

}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));

}


export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}




export default authReducer;