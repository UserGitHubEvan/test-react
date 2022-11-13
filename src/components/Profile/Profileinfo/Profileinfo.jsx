import React from 'react';
import classes from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div>
            <img className={classes.bannerImg} src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default Profileinfo;