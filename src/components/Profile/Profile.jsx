import React from 'react';
import ProfileBottomContainer from './ProfileBottom/ProfileBottomContainer';
import s from './Profile.module.css'
import ProfileTop from './ProfileTop/ProfileTop';




const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profileTop}>
        <ProfileTop profile={props.profile} status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} savePhoto={props.savePhoto} />
      </div>
      <div className={s.profileBottom}>
        <ProfileBottomContainer userId={props.userId} />
      </div>


    </div>
  )

}

export default Profile;