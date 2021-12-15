
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileContent from "./ProfileContent/ProfileContent";





function Profile(props) {


    if(!props.profilePage.userData || props.profilePage.userProfileStatus == null ) return (<div>no</div>)

    return (
        <div className={props.gridArea}>
            <ProfileHeader isPersonalPage={props.profilePage.userData.userId === props.authUserId} setNewUserProfileStatus={props.setNewUserProfileStatus} profileStatus={props.profilePage.userProfileStatus} {...props.profilePage.userData} />
            <ProfileNav activeNav={props.currentActiveNav} setNavPage={props.setNavPage}/>
            <div>{props.currentActiveNav}</div>
            <ProfileContent />
        </div>
    );
}

export default Profile