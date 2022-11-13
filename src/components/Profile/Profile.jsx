import React from "react";
import classes from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <Profileinfo/>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;