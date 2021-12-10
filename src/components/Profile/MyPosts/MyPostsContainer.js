
import {addPost, changeTextArea} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = () => {
    return {

    }
}




const MyPostsContainer = connect(mapStateToProps, {addPost,changeTextArea})(MyPosts)

export default MyPostsContainer