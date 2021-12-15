
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileContent from "./ProfileContent/ProfileContent";





function Profile(props) {


    if(!props.profilePage.userData || props.profilePage.userProfileStatus == null ) return (<div>no</div>)

    let isPersonalPage = props.profilePage.userData.userId === props.authUserId

    return (
        <div className={props.gridArea}>
            <ProfileHeader isPersonalPage={isPersonalPage} setNewUserProfileStatus={props.setNewUserProfileStatus} profileStatus={props.profilePage.userProfileStatus} {...props.profilePage.userData} />
            <ProfileNav isPersonalPage={isPersonalPage} activeNav={props.currentActiveNav} setNavPage={props.setNavPage}/>
            <ProfileContent activePage={props.currentActiveNav} />
        </div>
    );
}

export default Profile