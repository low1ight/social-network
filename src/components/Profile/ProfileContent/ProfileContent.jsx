import AboutMe from "./AboutMe/AboutMe";
import classes from './ProfileContent.module.css'

function ProfileContent () {
    return (
        <div className={classes.content}>
            <AboutMe />
        </div>
    )
}
export default ProfileContent