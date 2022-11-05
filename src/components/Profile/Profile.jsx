import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        // <main className='main'>
            <div className={classes.content}>
            <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div className='posts'>
                        <a className={classes.item} href=''>post 1</a>
                        <a className={classes.item} href=''>post 2</a>
                    </div>
                </div>
            </div>
        // </main>
    );
}

export default Profile;