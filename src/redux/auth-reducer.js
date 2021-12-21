import {authAPI} from "../api/api";
import {push} from 'connected-react-router'
let SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA'
let SET_AUTH_STATUS = 'SET-AUTH-STATUS'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth:null
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


export let setAuthUserData = (id,login,email) => ({type:SET_USER_AUTH_DATA,data:{id,login,email}})
export let setAuthStatus = (authStatus) => ({type:SET_AUTH_STATUS,authStatus})

export const getAuthData = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if (response.resultCode === 1) {
                dispatch(setAuthStatus(false))
            } else {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email))
                dispatch(setAuthStatus(true))
                console.log('set auth')
            }
        })
}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.resultCode === 1) return
    dispatch(setAuthUserData(null, null, null))
    dispatch(setAuthStatus(false))
}

export const logIn = (authData) => async (dispatch) => {
    let {email,password} = authData
    let response = await authAPI.login(email,password)
    if(response.resultCode === 1) {
        console.log(response)
        console.log('error')
    } else {
        await dispatch(getAuthData())
    }
}
