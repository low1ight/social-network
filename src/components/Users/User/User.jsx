import classes from './User.module.css'
import userDefaultPhoto from '../../../assets/images/default-user-img.png'
import {NavLink} from "react-router-dom";


function User(props) {


    return (
        <div className={`${classes.container} panel`}>

            <div className={classes.content}>
                <div className={classes.img}>
                    <NavLink to={`/profile/${props.id}`}>
                        <img alt="nophoto" src={userDefaultPhoto}/>
                    </NavLink>
                </div>
                <div className={classes.userName}>{props.name || 'no name'}</div>
                <div className={classes.buttons}>
                    {props.followed ?
                        <button disabled={props.usersFollowingInProgress.some(id => id === props.id)} onClick={() => props.unfollowUser(props.id)}>Unfollow</button> :
                        <button disabled={props.usersFollowingInProgress.some(id => id === props.id)} onClick={() => props.followUser(props.id)}>Follow</button>}

                    <button>Send</button>
                </div>
            </div>

        </div>

    )
}

// window.pageYOffset
//document.body.scrollTop || document.documentElement.scrollTop

export default User;

/*
<div className={classes.images}>images</div>
                <div className={classes.userName}>username</div>
                <div className={classes.buttons}>
                    <button>Follow</button>
                    <button>Send Message</button>
                </div>
                */