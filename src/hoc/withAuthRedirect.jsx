import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Preloader from "../components/common/Preloader";


export const withAuthRedirect = (Component) => {


    function RedirectComponent(props) {


        if (props.isAuth === null) return <Preloader/>

        //redirect unauthorized user to Login page
        else if (!props.isAuth && props.pathname !== '/login') return <Redirect to='/login'/>

        //redirect authorized user from Login page to default page
        else if (props.isAuth && props.pathname === '/login') return <Redirect to='/'/>

        return <Component {...props} />
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            pathname: state.router.location.pathname,
        }
    }


    return connect(mapStateToProps)(RedirectComponent)

}