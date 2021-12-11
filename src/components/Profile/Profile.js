
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNav from "./ProfileNav/ProfileNav";



function Profile(props) {



    return (
        <div className={props.gridArea}>
            <ProfileHeader {...props.profilePage.userData} />
            <ProfileNav activeNav={props.currentActiveNav} setNavPage={props.setNavPage}/>
            <div>{props.currentActiveNav}</div>


        </div>
    );
}

export default Profile