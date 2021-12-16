
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileContent from "./ProfileContent/ProfileContent";
import Preloader from "../common/Preloader";






function Profile(props) {




    if(!props.profilePage.userData || props.profilePage.userProfileStatus === null || props.profilePage.followStatus === null ) return <Preloader />

    let currentUserId = props.profilePage.userData.userId
    let isPersonalPage = currentUserId === props.authUserId

    return (
        <div className={props.gridArea}>
            <ProfileHeader isPersonalPage={isPersonalPage} setNewUserProfileStatus={props.setNewUserProfileStatus} profileStatus={props.profilePage.userProfileStatus} {...props.profilePage.userData} />
            <ProfileNav id={currentUserId} followUnfollowUser={props.followUnfollowUser}  followStatus={props.profilePage.followStatus} isPersonalPage={isPersonalPage} activeNav={props.currentActiveNav} setNavPage={props.setNavPage}/>
            <ProfileContent activePage={props.currentActiveNav} />
        </div>
    );
}

export default Profile