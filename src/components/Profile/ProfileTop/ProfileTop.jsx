import React, { useRef } from "react";
import styles from "./ProfileTop.module.css";
import defaultUserImg from '../../../assets/images/userImg.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"



const ProfileTop = (props) => {
  

    const fileInputRef = useRef(null);

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div >

            {/* <div>
                <img className={styles.profImgHead} src='https://sun9-29.userapi.com/impg/Jm54e_dISR1Mlp2HX7S6zIok9wwT7b3Xj1rjfw/gM0XGJEOTGk.jpg?size=734x269&quality=95&sign=fec643879817896f2451a7317537bd7b&type=album' />
            </div> */}
            <div className={styles.descriptionBlock}>

                <div className={styles.profileImageWrapper}>
                    <img className={styles.profileImage} src={props.profile.photos.large ? props.profile.photos.large : defaultUserImg} alt="profile image" />
                </div>
                <div className={styles.infoWrapper}>
                    <div className={styles.fullname}>{props.profile.fullName}</div>
                </div>
            </div>
            <input type={"file"} onChange={onMainPhotoSelected} style={{ display: 'none' }} ref={fileInputRef} />
            {(props.isAuth && (props.userId == undefined || props.userId == props.authorizedUserId)) && <button onClick={handleButtonClick} className={styles.uploadPhotoButton}>upload</button>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} />

        </div>
    )
}

export default ProfileTop;