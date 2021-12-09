import Post from "./Post/Post";

function MyPosts (props) {


    let posts = props.posts.map((post,i) => <Post key={i} message={post.message}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onChangeTextArea = (e) => {
    debugger
        props.changeTextArea(e.currentTarget.value)

    }

    return (
        <div>
            <div>
                <textarea onChange={onChangeTextArea} value={props.textarea}></textarea>
                <button onClick={onAddPost} className='.button'>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;