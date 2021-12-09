import {profileAPI} from "../api/api";

const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA'


let initialState = {
    userData: null,
    postsData: [
        {message: "Hi, how are you?", id: "1"},
        {message: "It's my first post", id: "2"}
    ],
    textarea: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_TEXT_AREA:
            debugger
            return {
                ...state,
                textarea: action.newText
            }

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData,
                    {message: state.textarea,id: `${state.postsData.length + 1}`}],
                textarea: ''
                }
        case SET_USER_PROFILE_DATA:
            debugger
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}

export default profileReducer;
export const setUserProfileData = (userData) => ({type:SET_USER_PROFILE_DATA, userData})
export const changeTextArea = (newText) => ({type: CHANGE_TEXT_AREA, newText: newText});
export const addPost = () => ({type: ADD_POST});


export const getUserProfile = (id) => (dispatch) => {
    profileAPI.getProfile(id).then(data => dispatch(setUserProfileData(data)))
}