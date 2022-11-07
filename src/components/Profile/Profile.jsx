import React from "react";
import classes from './../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        // <main className='main'>
            <div className={classes.content}>
            <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
        // </main>
    );
}

export default Profile;