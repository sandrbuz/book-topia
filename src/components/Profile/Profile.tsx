import React, { useState } from 'react';
import ProfileBottomContainer from './ProfileBottom/ProfileBottomContainer';
import s from './Profile.module.css'
import ProfileTop from './ProfileTop/ProfileTop';
import Test from './Test1';
import { log } from 'console';


type PropsType = {
  userId: number
  savePhoto: (file: File) => void;
 [key: string]: any //can have any number of optional additional properties with keys of type string and values ​​of any type
}

const Profile = (props: PropsType) => {



  return (
    <>
    <Test text1="text1" text2 = "text2"/>
      <ProfileTop profile={props.profile} status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} savePhoto={props.savePhoto} />
      <ProfileBottomContainer userId={props.userId} />
    </>
  )

}

export default Profile;