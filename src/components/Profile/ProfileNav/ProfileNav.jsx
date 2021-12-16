import React, {useState} from 'react';
import classes from './ProfileNav.module.css'
import {FollowButton} from "../../common/FollowButton";




function ProfileNav(props) {

    let [isFollowing,setIsFollowing] = useState(false)

    const followUnfollowUser = (id,action) => {
        setIsFollowing(true)
        props.followUnfollowUser(id,action).then(() => setIsFollowing(false))
    }


    const navElems = props.isPersonalPage ? ['About me', 'Edit'] : ['About me']

    return (
        <div className={`${classes.contentWrapper} panel`}>
            <div className={classes.content}>
                <div className={classes.nav}>
                    {navElems.map((elem, n) => <NavElem activeNav={props.activeNav} setNavPage={props.setNavPage}
                                                        key={n} elemName={elem}/>)}
                </div>

                <div className={classes.rightPanel}>
                    {props.isPersonalPage ?
                        <div>{''}</div> :

                        <div>
                            <button disabled> Message</button>
                            <FollowButton isUserFollowing={isFollowing} id={props.id} followUser={(id) => followUnfollowUser(id,'follow')} followUnfollowUser={(id) => followUnfollowUser(id, 'unfollow')} followed={props.followStatus} />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}

export default ProfileNav;

const NavElem = (props) => {

    let name = props.elemName

    return (
        <div className={props.activeNav === name ? classes.active : classes.leftElem} onClick={() => props.setNavPage(name)}>
            {name}
        </div>
    )
}