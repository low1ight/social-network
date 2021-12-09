
import MyProfile from "./MyPosts/MyProfile";
import MyPosts from "./MyPosts/MyPosts";


function Profile(props) {

    return (
        <div className={props.gridArea}>
                <MyProfile {...props.profilePage.userData} />
                <MyPosts posts={props.profilePage.postsData}
                         textarea={props.profilePage.textarea}
                         addPost={props.addPost}
                         changeTextArea={props.changeTextArea}/>
        </div>
    );
}

export default Profile