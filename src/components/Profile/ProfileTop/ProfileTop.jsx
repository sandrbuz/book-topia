import React, { useRef } from "react";
import styles from "./ProfileTop.module.css";
import defaultUserImg from '../../../assets/images/userImg.png'
import uploadIcon from "./../../../assets/images/upload.png"

const ProfileTop = (props) => {
    const fileInputRef = useRef(null);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const getUserImage = () =>{
        if(props.profile?.photos?.large){
            return props.profile.photos.large
        } else {
            return defaultUserImg
        }
    }

    const shouldRenderUploadImageButton = () => {
        if(!props.isAuth) return  false;
        if((props.userId == undefined || props.userId == props.authorizedUserId)) return true
    }

    return (
        <div className={styles.profileTop}>
                <div className={styles.profileImageWrapper}>
                    <img className={styles.profileImage} src={getUserImage()} alt="profile image" />
                    {shouldRenderUploadImageButton()  && <button onClick={handleButtonClick} className={styles.uploadPhotoButton}><img className={styles.uploadPhotoIcon} src={uploadIcon} alt="uploadIcon" /></button>}
                </div>
            <input type={"file"} onChange={onMainPhotoSelected} style={{ display: 'none' }} ref={fileInputRef} />
        </div>
    )
}

export default ProfileTop;