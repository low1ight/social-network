import User from "./User/User";
import classes from './Users.module.css'
import React from 'react'
import Preloader from "../common/Preloader";

function Users(props) {

    return (
        <div className={classes.usersContent}>
            <div className={classes.usersContainer}>

                {props.usersPage.users.map((item) => <User
                    unfollowUser={props.unfollowUser}
                    followUser={props.followUser}
                    usersFollowingInProgress={props.usersPage.usersFollowingInProgress}
                    toggleUsersFollowingInProgress={props.toggleUsersFollowingInProgress}
                    key={item.id}
                    {...item} />)}


            </div>
            {!props.usersPage.isFetching  && <div className={classes.preloader}><Preloader/></div>}
        </div>
    )

}

export default Users;