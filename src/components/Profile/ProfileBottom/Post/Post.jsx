import React from 'react';
import s from './Post.module.css'
import deleteIcon from "./../../../../assets/images/deleteIcon.png"


const Post = (props) => {

    return (
            <div className={s.post}>
                <img className={s.img} src="https://img.audiomania.ru/images/content/Avatar2.jpg" alt="miniAvatar" />
                <div className={s.text}>{props.message}</div>
                <img className={s.deleteIcon} src={deleteIcon} alt="" />
            </div>
    )
}

export default Post;