import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, changeTextArea, getUserProfile} from "../../redux/profile-reducer";
import React from 'react'
import {withRouter} from "react-router-dom";


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

let withUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile,changeTextArea,addPost})(withUrlDataProfileContainer)