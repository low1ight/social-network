import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_USER_FOLLOWING_IN_PROGRESS = 'TOGGLE-USER-FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [],
    isFetching: true,
    usersFollowingInProgress: []
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_USER_FOLLOWING_IN_PROGRESS:

            return {
                ...state,
                usersFollowingInProgress: action.status ?
                    [...state.usersFollowingInProgress, action.userId] :
                    state.usersFollowingInProgress.filter(id => id !== action.userId)
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        case FOLLOW_USER:

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:

            return {...state, users: [...state.users, ...action.users]}


        default:
            return state

    }
}


export const followSuccess = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsFetching = (status) => ({type: TOGGLE_IS_FETCHING, status})
export const toggleUsersFollowingInProgress = (userId, status) => ({
    type: TOGGLE_USER_FOLLOWING_IN_PROGRESS,
    userId,
    status
})

export const getUsers = (page) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(page)
        .then(data => dispatch(setUsers(data.items))).then(() => {
        dispatch(toggleIsFetching(false))
    })
}

export const followUser = (id) => (dispatch) => {
    debugger
    dispatch(toggleUsersFollowingInProgress(id,true))
    usersAPI.followUser(id).then(data => {
        if (data.resultCode === 1) return
        dispatch(followSuccess(id))
        dispatch(toggleUsersFollowingInProgress(id,false))
    })
}
export const unfollowUser = (id) => (dispatch) => {
    dispatch(toggleUsersFollowingInProgress(id,true))
    usersAPI.unfollowUser(id).then(data => {
        if (data.resultCode === 1) return
        dispatch(unfollowSuccess(id))
        dispatch(toggleUsersFollowingInProgress(id,false))
    })
}
