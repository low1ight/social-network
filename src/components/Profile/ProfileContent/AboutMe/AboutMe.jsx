import React from 'react';
import classes from './AboutMe.module.css'


function AboutMe() {
    return (
        <div className={classes.content}>
            <div className={`${classes.social} panel`}> social networks</div>
            <div className={`${classes.biography} panel`}> about</div>
            <div className={`${classes.aboutWork} panel`}> work</div>
        </div>
    );
}

export default AboutMe;

