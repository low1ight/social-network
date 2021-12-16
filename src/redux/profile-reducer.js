import {followAPI, profileAPI} from "../api/api";

const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const SET_USER_FOLLOW_STATUS = 'SET-USER-FOLLOW-STATUS'


let initialState = {
    userData: null,
    userProfileStatus: null,
    followStatus: null

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
                userProfileStatus: action.status
            }
        case SET_USER_FOLLOW_STATUS:
            return {
                ...state,
                followStatus: action.followStatus
            }
        default:
            return state
    }
}

export default profileReducer;
export const setUserProfileData = (userData) => ({type: SET_USER_PROFILE_DATA, userData})
export const setUserProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export const setUserFollowStatus = (followStatus) => ({type:SET_USER_FOLLOW_STATUS,followStatus})

export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getProfileStatus(id).then(data => dispatch(setUserProfileStatus(data)))
    profileAPI.getProfile(id).then(data => dispatch(setUserProfileData(data)))
    followAPI.checkFollowStatus(id).then(data => dispatch(setUserFollowStatus(data)))

}

export const setNewUserProfileStatus = (status) => async (dispatch) => {
   let response = await profileAPI.setProfileStatus(status)
    if (response.resultCode === 1) return
    dispatch(setUserProfileStatus(status));

}
export const followUnfollowUser = (id,actionType) => async dispatch => {
    let action = false
    let response
    if(actionType === 'follow') {
        action = true
        response = await followAPI.followUser(id)
    }
    else {
        response = await followAPI.unfollowUser(id)
    }
    if(response.resultCode === 0) dispatch(setUserFollowStatus(action))
}
