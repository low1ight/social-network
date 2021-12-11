import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers,applyMiddleware(thunk),)

export default store