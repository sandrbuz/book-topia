import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"


const Profile = () => {
    return  <div className={s.content}>
    <div>
      <img src='https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;