import {connect} from "react-redux";
import Users from "./Users";
import {
     followUser, getUsers,
    toggleUsersFollowingInProgress,
     unfollowUser
} from "../../redux/users-reducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";





class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: window.innerHeight,
            pageYOffset: window.pageYOffset,
            scrollHeight: document.documentElement.scrollHeight,
            page: 1
        }
    }

    handleScroll = () => {
        this.setState({
            windowHeight: window.innerHeight,
            pageYOffset: window.pageYOffset,
            scrollHeight: document.documentElement.scrollHeight
        })
    }

    getUsers = () => {
        this.setState((state) => ({
            page: state.page + 1
        }))
        this.props.getUsers()
        this.handleScroll()


    }

    componentDidMount() {
        this.getUsers()
        window.addEventListener('scroll',this.handleScroll)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.pageYOffset !== this.state.pageYOffset) {
            if(this.state.pageYOffset + this.state.windowHeight + 200 > this.state.scrollHeight) {
                this.getUsers()
            }
        }
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }



    render() {

        return (
           < Users {...this.props} />
        )
    }

}


let mapStateTorPops = (state) => {
   return {
       usersPage: state.usersPage
   }
}


let UsersWithRedirect = withAuthRedirect(UsersAPI)
let UsersContainer = connect(mapStateTorPops,{followUser,unfollowUser,toggleUsersFollowingInProgress,getUsers})(UsersWithRedirect)

export default UsersContainer;