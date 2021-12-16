import {connect} from "react-redux";
import Profile from "./Profile";
import {followUnfollowUser, getUserProfile, setNewUserProfileStatus} from "../../redux/profile-reducer";
import React from 'react'
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({activeNavPage:'About me'})
    }

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getUserProfile(this.props.match.params.userId)
        }
    }

    setActiveNavPage = (pageName) => {
        this.setState({activeNavPage:pageName})
    }

    render() {


        if(!this.props.match.params.userId) return <Redirect to={`/profile/${this.props.state.auth.userId}`} />
        return (
            <Profile followUnfollowUser={this.props.followUnfollowUser} setNewUserProfileStatus={this.props.setNewUserProfileStatus} currentActiveNav={this.state.activeNavPage} setNavPage={this.setActiveNavPage} {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authUserId: state.auth.id,
    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,{getUserProfile,followUnfollowUser,setNewUserProfileStatus}))(ProfileContainer)
