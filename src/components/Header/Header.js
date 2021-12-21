import {FiAlignJustify} from "react-icons/fi";
import {IconContext} from "react-icons";
import classes from './Header.module.css'
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <div className={classes.header}>
            <div className="container">
                {props.authUserData.isAuth ? <HeaderWithAuth logOut={props.logOut} authUserData={props.authUserData}/> : <div>no auth</div>}
            </div>
        </div>
    );
}

export default Header

function HeaderWithAuth (props) {

    return (
        <div className={classes.headerContent}>
            <IconContext.Provider value={{ color: "#768C9E", size: "2em"}}>
                <FiAlignJustify/>
            </IconContext.Provider>
            <div><Link to={`/profile/${props.authUserData.id}`}>Profile</Link></div>
            <div><Link to='/users'>Users</Link></div>
            {/*<div onClick={props.logOut}>logout</div>*/}
        </div>
    )
}