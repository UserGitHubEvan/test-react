import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const  MyPosts = () => {

    // Imitating a server with data. Array with data objects
    let posts = [
        {id: '1', message: 'Hiy, how are you?', likesCount: 50, dislikesCount: 10},
        {id: '2', message: 'New news for wire'}
    ];

    // Using function .map() for new Array components
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} dislikesCount={post.dislikesCount} />);

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <form action="" className={classes.addPost}>
                <input type='text' placeholder='your news...' className={classes.yourNews} />
                <button className={classes.btnNewsSend}>Send</button>
            </form>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;