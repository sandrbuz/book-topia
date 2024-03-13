import React from "react";
import s from "./MyContacts.module.css"
import ProfileStatus from "./ProfileStatus"
import fbIcon from "./../../../../assets/images/fbIcon.png"
import ghIcon from "./../../../../assets/images/ghIcon.png"
import inIcon from "./../../../../assets/images/inIcon.png"
import tgIcon from "./../../../../assets/images/tgIcon.png"
import { NavLink } from "react-router-dom";

const MyContacts = (props) => {
    return (
        <div className={s.myContacts}>
            <div className={s.userName}>{props.profile?.fullName}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} authorizedUserId={props.authorizedUserId} userId={props.userId} />
            <hr style={{width: "150px", marginTop:"25px"}}/>
            <p  className={s.talkToMe}>Talk to me:</p>
            <div className={s.contactsIcons}>
                <NavLink to="https://www.facebook.com/sandrickbuzukashvili" target="_blank">
                    <img className={s.socialIcon} src={fbIcon} alt="fbIcon" />
                </NavLink>
                <NavLink to="https://github.com/sandrbuz/react-samurai-1.0" target="_blank">
                    <img className={s.socialIcon} src={ghIcon} alt="ghIcon" />
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/alexander-buzukashvili-6000bb255/" target="_blank">
                    <img className={s.socialIcon} src={inIcon} alt="inIcon" />
                </NavLink>
                <NavLink to="https://t.me/Sanbu123" target="_blank">
                    <img className={s.socialIcon} src={tgIcon} alt="tgIcon" />
                </NavLink>
            </div>
        </div>
    )
}

export default MyContacts;