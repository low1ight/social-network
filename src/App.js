import classes from './App.module.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (
        <BrowserRouter>
            <div className={classes.app}>
                <div className={classes.headerArea}>
                    <HeaderContainer/>
                </div>
                <div className={classes.contentArea}>
                    <div className="container">
                        <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                        {/*<Redirect from='/profile/' to='/profile/333' />*/}
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
