import React from 'react';
import s from './Post.module.css'
import deleteIcon from "./../../../../../assets/images/deleteIcon.png"


const Post = (props) => {

    return (
        <div  className={s.post}>
            <div className={s.postInfo}>
                <img className={s.img} src={props.thumbnail} alt="miniAvatar" />
                <div className={s.text}>{props.message}</div>
            </div>
            <img  onClick={props.onDeletePost} className={s.deleteIcon} src={deleteIcon} alt="" />
        </div> 
    )
}

export default Post;