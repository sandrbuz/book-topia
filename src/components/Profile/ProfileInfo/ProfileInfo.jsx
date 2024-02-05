import React from "react";
import styles from "./ProfileInfo.module.css";
import defaultUserImg from '../../../assets/images/userImg.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"



const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
           if(e.target.files.length){
              props.savePhoto(e.target.files[0])
           }
    }

    return (
        <div>
            {console.log(props)}
            <div>
                <img className={styles.profImgHead} src='https://sun9-29.userapi.com/impg/Jm54e_dISR1Mlp2HX7S6zIok9wwT7b3Xj1rjfw/gM0XGJEOTGk.jpg?size=734x269&quality=95&sign=fec643879817896f2451a7317537bd7b&type=album' />
            </div>
            <div className={styles.descriptionBlock}>

                <div className={styles.profileImageWrapper}>
                    <img className={styles.profileImage} src={props.profile.photos.large ? props.profile.photos.large : defaultUserImg} alt="profile image" />
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.fullname}>{props.profile.fullName}</div>
                    <div  className={styles.workStatus}>{props.profile.lookingForAJob ? `Looking for a job 😃` :'Not looking for a job 😐'}</div>
                </div>
            </div>
            <div className={styles.status}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId}/>
            </div>
            {(props.isAuth && props.userId == undefined) && <input type={"file"} onChange={onMainPhotoSelected}/>}            
        </div>
    )
}

export default ProfileInfo;