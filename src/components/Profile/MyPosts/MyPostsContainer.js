
import {addPost, changeTextArea} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {

    }
}

let variable = 1


const MyPostsContainer = connect(mapStateToProps, {addPost,changeTextArea})(MyPosts)

export default MyPostsContainer