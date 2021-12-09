
import {addPostActionCreator, changeTextAreaActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {
    return {
        changeTextArea: (e) => {
            dispatch(changeTextAreaActionCreator(e.target.value))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }


    }
}

let mapStateToProps = (state) => {
    return {

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer