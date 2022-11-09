import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const  MyPosts = () => {
    return (
        <div className={classes.posts}>
            My post
            <Post message='Hiy, how are you?' likesCount='10' dislikesCount='5' />
            <Post message='New news for wire' likesCount='50' dislikesCount='1' />
            {/*<Post />*/}
        </div>
    );
}

export default MyPosts;