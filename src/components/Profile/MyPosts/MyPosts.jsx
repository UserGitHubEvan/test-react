import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const  MyPosts = () => {
    return (
        <div className={classes.posts}>
            My post
            <Post message='Hiy, how are you?' countlikes='10' countdislikes='5' />
            <Post message='New news for wire' countlikes='50' countdislikes='1' />
            {/*<Post />*/}
        </div>
    );
}

export default MyPosts;