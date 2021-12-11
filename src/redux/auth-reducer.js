import {authAPI} from "../api/api";

let SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA'
let SET_AUTH_STATUS = 'SET-AUTH-STATUS'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth:false
}



export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:

            return {
                ...state,
                ...action.data
            }
        case SET_AUTH_STATUS:
            return {
                ...state,
                isAuth: action.authStatus
            }
        default:
            return state

    }
}



export let setUserData = (id,login,email) => ({type:SET_USER_AUTH_DATA,data:{id,login,email}})
export let setAuthStatus = (authStatus) => ({type:SET_AUTH_STATUS,authStatus})

export const getAuthData = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.resultCode) return
            let {id, login, email} = response.data
            dispatch(setUserData(id, login, email))
            dispatch(setAuthStatus(true))
        })
}