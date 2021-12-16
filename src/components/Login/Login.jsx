import classes from './Login.module.css'


function Login() {
    return (
        <div>
            <div className={classes.form}>
                <div className={classes.title}>Welcome</div>
                <div className={classes.subtitle}>Please, Sign In</div>
                <div className={`${classes.inputContainer} ${classes.ic1}`}>
                    <input id="firstname" className={classes.input} type="text" placeholder=" "/>
                    <div className={classes.cut}></div>
                    <label htmlFor="firstname" className={classes.placeholder}>Login</label>
                </div>
                <div className={`${classes.inputContainer} ${classes.ic2}`}>
                    <input id="lastname" className={classes.input} type="text" placeholder=" "/>
                    <div className={classes.cut}></div>
                    <label htmlFor="lastname" className={classes.placeholder}>Password</label>
                </div>
                <button type="text" className={classes.submit}>Sign In</button>
            </div>
        </div>
    )
}

export default Login