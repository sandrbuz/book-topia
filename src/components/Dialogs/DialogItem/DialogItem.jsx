import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {           

    return (
        <div >        
            <NavLink onClick={()=>{props.setCurrentDialogId(props.id)}} className={({ isActive }) => `${isActive ? s.active : s.notActive} ${s.dialog}`} to={"/dialogs/" + props.id}>
                <img className={s.dialogAva} src={props.imgURL} alt="dialog avatar" />
                 <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;
