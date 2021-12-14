import {profileAPI} from "../api/api";

const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

let initialState = {
    userData: null,
    userProfileStatus: null,

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_PROFILE_DATA:

            return {
                ...state,
                userData: action.userData
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                userProfileStatus:action.status
            }
        default:
            return state
    }
}

export default profileReducer;
export const setUserProfileData = (userData) => ({type:SET_USER_PROFILE_DATA, userData})
export const setUserProfileStatus = (status) => ({type: SET_PROFILE_STATUS,status })



export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getProfileStatus(id).then(data => dispatch(setUserProfileStatus(data)))
    profileAPI.getProfile(id).then(data => dispatch(setUserProfileData(data)))

}
export const setNewUserProfileStatus = (status) => (dispatch) => {
    profileAPI.setProfileStatus(status).then(data => {
        if(data.resultCode === 1) return
        dispatch(setUserProfileStatus(status));
    })
}