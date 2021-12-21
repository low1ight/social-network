import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, logOut} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData()
    }


    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        authUserData: state.auth
    }
}
export default connect(mapStateToProps, {getAuthData,logOut})(HeaderContainer)