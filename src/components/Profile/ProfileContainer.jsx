import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, changeTextArea, getUserProfile} from "../../redux/profile-reducer";
import React from 'react'
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getUserProfile(this.props.match.params.userId)
        }
    }

    render() {


        if(!this.props.match.params.userId) return <Redirect to={`/profile/${this.props.state.auth.userId}`} />
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

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,{getUserProfile,changeTextArea,addPost}))(ProfileContainer)
