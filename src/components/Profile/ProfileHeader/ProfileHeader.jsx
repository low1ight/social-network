import classes from './ProfileHeader.module.css'
import defaultUserImg from '../../../assets/images/default-user-img.png'
import {PersonalProfileStatus} from "./Status/PersonalPofileStatus";
import {Status} from "./Status/Status";


function ProfileHeader(props) {

    return (
        <div className={`${classes.container} ${classes.profileGradient}`}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div className={classes.img}><img width='200px' height='200px' src={defaultUserImg} alt="noPhoto"/></div>
                    <div className={classes.userInfo}>
                        <span className={classes.userName}>{props.fullName ? props.fullName : 'There is no user name'}</span>
                        <div className={classes.userStatus}>
                            {props.isPersonalPage ?
                                <PersonalProfileStatus setNewUserProfileStatus={props.setNewUserProfileStatus}
                                                       profileStatus={props.profileStatus}/>
                                :<Status profileStatus={props.profileStatus} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileHeader