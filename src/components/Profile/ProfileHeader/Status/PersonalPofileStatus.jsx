import {useEffect, useRef, useState} from "react";
import {useFormik} from "formik";
import classes from './ProfileStatus.module.css'
import Preloader from "../../../common/Preloader";
import {Status} from "./Status";

export function PersonalProfileStatus(props) {
    const [editMode, setEditMode] = useState(false)

    const ref = useRef();


    useOnClickOutside(ref, () => stopEditing(false));


    const stopEditing = () => {
        setEditMode(false)
        if (props.profileStatus !== formik.values.profileStatus) formik.handleReset({})
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
        onSubmit: (values, actions) => {
            props.setNewUserProfileStatus(values.profileStatus)
                .then(() => {
                    console.log('asd')
                    actions.setSubmitting(false)
                    stopEditing()
                })

        }

    });

    useEffect(() => {
        formik.resetForm({values: {profileStatus: props.profileStatus}})

    }, [props.profileStatus]);

    return (
        <>
            {editMode ?
                <form ref={ref} onSubmit={formik.handleSubmit} className={classes.inputWrapper}>
                    <input autoFocus
                           id='profileStatus'
                           type="text"
                           value={formik.values.profileStatus}
                           onChange={formik.handleChange}/>
                    {formik.isSubmitting ?
                        <Preloader preloaderType='gear' weight='40px' height='40px'/> :
                        <button type='submit'>
                            save
                        </button>}
                </form>

                :
                <span className={classes.status} onClick={() => setEditMode(true)}>
                                    {formik.values.profileStatus === '' ?
                                        <span>set status</span> : <Status profileStatus={formik.values.profileStatus}/>}
                                </span>
            }
        </>
    )

}