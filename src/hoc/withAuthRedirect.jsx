import {connect} from "react-redux";
import Login from "../components/Login/Login";


export const withAuthRedirect = (Component) => {

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    function RedirectComponent(props) {

        if (!props.isAuth) return <Login />
        return <Component {...props} />

    }


    return connect(mapStateToProps)(RedirectComponent)

}