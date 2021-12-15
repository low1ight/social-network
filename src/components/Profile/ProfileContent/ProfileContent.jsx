import AboutMe from "./AboutMe/AboutMe";
import classes from './ProfileContent.module.css'

function ProfileContent (props) {

    return (
        <div className={classes.content}>
            {props.activePage === 'About me' && <AboutMe />}
            {props.activePage === 'Edit' && <div>edit</div>}
        </div>
    )
}
export default ProfileContent