import classes from './App.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {ConnectedRouter} from "connected-react-router";

const App = ({history}) => {

    return (
        <ConnectedRouter history={history}>
            <div className={classes.app}>
                <div className={classes.headerArea}>
                    <HeaderContainer/>
                </div>
                <div className={classes.contentArea}>
                    <div className="container">
                        <Switch>
                            <Route path="/profile/:userId?" component={ProfileContainer} />
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/login' component={Login}/>
                            <Redirect form='*' to='/profile' />
                        </Switch>
                    </div>
                </div>
            </div>
        </ConnectedRouter>
    );
}


export default App;
