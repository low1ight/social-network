import React from 'react';
import classes from './ProfileNav.module.css'



function ProfileNav(props) {

    let navElems = ['About me', 'Edit']

    return (
        <div className={`${classes.contentWrapper} panel`}>
            <div className={classes.content}>
                <div className={classes.nav}>
                    {navElems.map((elem,n) => <NavElem activeNav={props.activeNav} setNavPage={props.setNavPage} key={n} elemName={elem}/>)}
                </div>

                <div className={classes.rightPanel}>
                    <button disabled> Message </button>
                    <button> Follow </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileNav;

const NavElem = (props) => {

    let name = props.elemName

    return(
        <div className={props.activeNav === name && classes.active} onClick={() => props.setNavPage(name)}>
            {name}
        </div>
    )
}