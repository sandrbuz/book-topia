import React from 'react';
import s from "./Post.module.css"


const Post = (props) => {
   
    return (
        <div className={s.item}>
            <img src="https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;