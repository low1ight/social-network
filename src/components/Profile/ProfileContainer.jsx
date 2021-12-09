import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, changeTextArea, getUserProfile} from "../../redux/profile-reducer";
import React from 'react'
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        debugger

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage

    }
}

export default compose(withRouter,connect(mapStateToProps,{getUserProfile,changeTextArea,addPost}))(ProfileContainer)
