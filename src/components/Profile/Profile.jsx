import React from 'react';
import ProfileBottomContainer from './ProfileBottom/ProfileBottomContainer';
import s from './Profile.module.css'
import ProfileTop from './ProfileTop/ProfileTop';

const Profile = (props) => {

  return (
    <>
      <ProfileTop profile={props.profile} status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} savePhoto={props.savePhoto} />
      <ProfileBottomContainer userId={props.userId} />
    </>
  )

}

export default Profile;