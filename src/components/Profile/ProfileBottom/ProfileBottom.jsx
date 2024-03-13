import React from 'react';
import s from './ProfileBottom.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import MyContacts from './MyContacts/MyContacts.jsx';


const ProfileBottom = (props) => {

  return (
    <div className={s.profileBottom}>
      <MyContacts {...props}/>
      <MyPosts onDeletePost={props.deletePost}  onAddPost={props.addPost} {...props}/>
    </div> 
  )
}

export default ProfileBottom;



