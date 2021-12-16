export const FollowButton = (props) => {
    return (
        <>
            {
                props.followed ?
                    <button disabled={props.isUserFollowing}
                            onClick={() => props.unfollowUser(props.id)}>Unfollow</button> :
                    <button disabled={props.isUserFollowing}
                            onClick={() => props.followUser(props.id)}>Follow</button>
            }
        </>
    )
}