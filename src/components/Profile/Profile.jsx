import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className='banner-img' src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;