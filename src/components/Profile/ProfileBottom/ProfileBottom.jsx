import React from 'react';
import s from './ProfileBottom.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';
import MyContacts from './MyContacts/MyContacts.jsx';




const ProfileBottom = (props) => {

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.profileBottom}>
      <MyContacts {...props}/>
      <MyPosts  onAddPost={onAddPost} {...props}/>
    </div>
  )
}








export default ProfileBottom;



