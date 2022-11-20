import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const  MyPosts = () => {

    let postData = [
        {id: '1', message: 'Hiy, how are you?', likesCount: 50, dislikesCount: 10},
        {id: '2', message: 'New news for wire'}
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <form action="" className={classes.addPost}>
                <input type='text' placeholder='your news...' className={classes.yourNews} />
                <button className={classes.btnNewsSend}>Send</button>
            </form>
            <div className={classes.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} dislikesCount={postData[0].dislikesCount} />
                <Post message={postData[0].message} likesCount={postData[0].likesCount} dislikesCount={postData[0].dislikesCount} />
            </div>
        </div>
    );
}

export default MyPosts;