import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthStatus, setUserData} from "../../redux/auth-reducer";
import axios from "axios";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.1/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode) return
                let {id, login, email} = response.data.data
                this.props.setUserData(id, login, email)
                this.props.setAuthStatus(true)
            })
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
export default connect(mapStateToProps, {setUserData,setAuthStatus})(HeaderContainer)