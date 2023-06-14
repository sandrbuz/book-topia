import React from 'react';
import s from "./Post.module.css"


const Post = (props) => {
   
    return (
        <div className={s.item}>
           <div className={s.imgAndText}>
           <img src="https://www.soyuz.ru/public/uploads/files/2/7615320/202212191629123ffc8dd5e1.jpg" alt="" />
            <div className={s.text}>{props.message}</div>
           </div>
        
                <span className={s.likes}>like {props.likesCount}</span> 
            
        </div>
    )
}

export default Post;