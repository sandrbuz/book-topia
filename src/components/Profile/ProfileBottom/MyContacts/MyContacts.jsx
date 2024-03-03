import React from "react";
import s from "./MyContacts.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import fbIcon from "./../../../../assets/images/fbIcon.png"
import ghIcon from "./../../../../assets/images/ghIcon.png"
import inIcon from "./../../../../assets/images/inIcon.png"
import tgIcon from "./../../../../assets/images/tgIcon.png"

const MyContacts = (props) => {
    return (
        <>
            <div className={s.userName}>{props.profile?.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} />
            <p className={s.talkToMe}>Talk to me:</p>
            <div className="contactsIcons">
                <img className={s.socialIcon} src={fbIcon} alt="fbIcon" />
                <img className={s.socialIcon} src={ghIcon} alt="ghIcon" />
                <img className={s.socialIcon} src={inIcon} alt="inIcon" />
                <img className={s.socialIcon} src={tgIcon} alt="tgIcon" />
            </div>
        </>
    )
}

export default MyContacts;