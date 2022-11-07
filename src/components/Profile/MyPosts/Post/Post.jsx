import React from "react";
import classes from './Post.module.css'

const  Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJarEiFul8Ly3QBZMRxHdHLGGT1g3vBJT__q6oWEKk928hx-EXtyqQBnRXsCW_TLWoFc&usqp=CAU" alt=""/>
            { props.message }
            <div>
                <span>{ props.countlikes } likes </span>
                <span>{ props.countdislikes } dislike</span>
            </div>
        </div>
    );
}

export default Post;