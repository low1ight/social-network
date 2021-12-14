import classes from './ProfileHeader.module.css'
import defaultUserImg from '../../../assets/images/default-user-img.png'
import {useFormik} from 'formik'
import {useEffect, useRef, useState} from "react";





function ProfileHeader(props) {

    return (
        <div className={`${classes.container} ${classes.profileGradient}`}>
            <div className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div className={classes.img}><img width='200px' height='200px' src={defaultUserImg} alt="noPhoto"/></div>
                    <div className={classes.userInfo}>
                        <span>{props.fullName ? props.fullName : 'There is no user name'}</span>
                        <StatusForm setNewUserProfileStatus={props.setNewUserProfileStatus} profileStatus={props.profileStatus}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatusForm (props) {
    const [editMode,setEditMode] = useState(false)

    const ref = useRef();


    useOnClickOutside(ref, () => stopEditing(false));



    const stopEditing = () => {
        setEditMode(false)
        formik.handleReset({})
    }
    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [ref, handler]
        );
    }

    const formik = useFormik({
        initialValues: {
            profileStatus: props.profileStatus
        },
        onSubmit: (values,actions) => {
           // props.setNewUserProfileStatus(values.profileStatus)
                   actions.setSubmitting(false)
                   actions.resetForm()
        }

    });

    return (
        <div>
            {editMode ?
                <form onBlur={() => 'blured'} ref={ref} onSubmit={formik.handleSubmit} className={classes.inputWrapper}>
                    <input autoFocus
                           id='profileStatus'
                           type="text"
                           value={formik.values.profileStatus}
                           onChange={formik.handleChange}/>
                    <button type='submit'>
                        save
                    </button>
                </form>

                :
                <span onClick={() => setEditMode(true)}>
                                    {formik.values.profileStatus === '' ?
                                        <span>set status</span> : formik.values.profileStatus}
                                </span>
            }
        </div>
    )

}

export default ProfileHeader