import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={s.profImg} src='https://sun9-29.userapi.com/impg/Jm54e_dISR1Mlp2HX7S6zIok9wwT7b3Xj1rjfw/gM0XGJEOTGk.jpg?size=734x269&quality=95&sign=fec643879817896f2451a7317537bd7b&type=album' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;