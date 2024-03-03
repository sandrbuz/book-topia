import React from 'react';
import s from './ProfileBottom.module.css'
import ProfileStatusWithHooks from './MyContacts/ProfileStatusWithHooks.jsx'
import MyPosts from './MyPosts/MyPosts.jsx';
import MyContacts from './MyContacts/MyContacts.jsx';




const ProfileBottom = (props) => {

  let onAddPost = (values) => {
    console.log(values)
    props.addPost(values.newPostText)
  }

  return (
    <>
      <MyContacts {...props}/>
      <MyPosts  onAddPost={onAddPost} {...props}/>
    </>
  )
}








export default ProfileBottom;



