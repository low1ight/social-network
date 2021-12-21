import classes from './Login.module.css'
import { Formik, Field, ErrorMessage} from 'formik'
import * as yup from 'yup';
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import { push } from 'connected-react-router'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


function Login(props) {



    const validationSchema = yup.object().shape({
        email: yup.string().email('Please, enter valid email address.').required('Required field!'),
        password: yup.string().required('Required field!'),

    })


    return (
          <div className={classes.loginWrapper}>
              <Formik
                  initialValues={{email:'', password:''}}
                  validationSchema={validationSchema}
                  onSubmit={(values) => props.logIn(values) }
                  >
                  { ({values,errors,handleSubmit,isValid,dirty}) =>

                      <form onSubmit={handleSubmit} className={`${classes.form} panel`}>
                          <div className={classes.title}>Welcome</div>
                          <div className={classes.subtitle}>Please, Sign In</div>

                          <div className={`${classes.inputContainer} ${classes.ic1}`}>
                              <LoginInput name="email" label="Email"  />
                          </div>

                          <div className={`${classes.inputContainer} ${classes.ic2}`}>
                              <LoginInput name="password" label="Password" />
                          </div>




                          <button disabled={!isValid || !dirty }
                              type="submit"
                                  id='submit'
                                  className={classes.submit}>Sign In</button>
                      </form>
                  }
              </Formik>

          </div>



    )
}

const LoginInput = (props) => {

    const {label,name, ...rest} = props


    return (
        <>
            <Field id={name} name={name} placeholder=" " className={classes.input} {...rest}/>
            <div className={classes.cut}>{''}</div>
            <label htmlFor={name} className={classes.placeholder}>{label}</label>
            <ErrorMessage component={ErrorMessageItem} name={name}/>
        </>
    )
}

const ErrorMessageItem = (props) => {
   return (
       <div className={classes.errorMessage}>{props.children}</div>
   )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default withAuthRedirect(connect(mapStateToProps, {logIn})(Login))
