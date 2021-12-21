import {applyMiddleware,combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {connectRouter,routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})


export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),thunk
            ),
        ),

    )

    return store
}

// let store = createStore(
//     rootReducer(history),
//     compose(
//         composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))
// ))