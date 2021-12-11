import {FiAlignJustify} from "react-icons/fi";
import {IconContext} from "react-icons";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={classes.header}>
            <div className="container">
                {props.authUserData.isAuth ? <HeaderWithAuth authUserData={props.authUserData}/> : <div>no auth</div>}
            </div>
        </div>
    );
}

export default Header

function HeaderWithAuth (props) {
    debugger
    return (
        <div className={classes.headerContent}>
            <IconContext.Provider value={{ color: "#768C9E", size: "2em"}}>
                <FiAlignJustify/>
            </IconContext.Provider>
            <div><NavLink to={`/profile/${props.authUserData.id}`}>Profile</NavLink></div>
            <div><NavLink to='/users'>Users</NavLink></div>
        </div>
    )
}