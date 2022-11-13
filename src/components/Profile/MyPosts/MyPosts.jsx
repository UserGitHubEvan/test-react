import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const  MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div className={classes.addPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hiy, how are you?' likesCount='10' dislikesCount='5' />
                <Post message='New news for wire' likesCount='50' dislikesCount='1' />
            </div>
            {/*<Post />*/}
        </div>
    );
}

export default MyPosts;