import classes from './MyProfile.module.css'
import defaultUserImg from '../../../assets/images/default-user-img.png'


function MyProfile(props) {

    return (
        <div className={`${classes.container} ${classes.profileGradient}`}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div><img width='200px' height='200px' src={defaultUserImg} alt="noPhoto"/></div>
                    <div className={classes.userName}>{props.fullName}</div>
                </div>
            </div>

        </div>
    )
}

export default MyProfile