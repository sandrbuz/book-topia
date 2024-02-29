import React, { useRef } from "react";
import styles from "./ProfileTop.module.css";
import defaultUserImg from '../../../assets/images/userImg.png'
import Preloader from "../../common/Preloader/Preloader";
import uploadIcon from "./../../../assets/images/upload.png"



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
        <div className={styles.profileTop}>

            <div className={styles.topWrapper}>
                <div className={styles.coverImg}></div>
                <div className={styles.profileImageWrapper}>
                    <img className={styles.profileImage} src={props.profile.photos.large ? props.profile.photos.large : defaultUserImg} alt="profile image" />
                    {(props.isAuth && (props.userId == undefined || props.userId == props.authorizedUserId)) && <button onClick={handleButtonClick} className={styles.uploadPhotoButton}><img className={styles.uploadPhotoIcon} src={uploadIcon} alt="uploadIcon" /></button>}
                </div>
            </div>
             
            <input type={"file"} onChange={onMainPhotoSelected} style={{ display: 'none' }} ref={fileInputRef} />
          
        </div>
    )
}

export default ProfileTop;