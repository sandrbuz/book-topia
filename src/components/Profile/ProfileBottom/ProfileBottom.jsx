import React from 'react';
import s from './ProfileBottom.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import MyContacts from './MyContacts/MyContacts.jsx';




const ProfileBottom = (props) => {

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  let onDeletePost = (postId) => {
    props.deletePost(postId)
  }

  return (
    <div className={s.profileBottom}>
      <MyContacts {...props}/>
      <MyPosts onDeletePost={onDeletePost}  onAddPost={onAddPost} {...props}/>
    </div> 
  )
}








export default ProfileBottom;



