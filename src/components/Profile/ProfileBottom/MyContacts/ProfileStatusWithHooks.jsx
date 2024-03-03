import React, { useEffect,memo, useState } from "react";
import styles from "./ProfileStatusWithHooks.module.css";
import changeIcon from "./../../../../assets/images/changeIcon.png"
import { withRouter } from "../../ProfileContainer";

const ProfileStatus = React.memo((props) => {



    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            <span className={styles.statusLeft}>status: </span>
            {!editMode &&
                    <span onDoubleClick={props.isAuth && props.userId == undefined ? activateEditMode : null}>{props.status || "-----"}  </span>
            }
            {editMode && 
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}type="text" />
            }

            
            {(props.isAuth && (props.userId == undefined || props.userId == props.authorizedUserId)) && <span onClick={activateEditMode} className={styles.changeStatus}><img src={changeIcon} alt="change" /></span>}
        </div>
    )


})

export default ProfileStatus;
