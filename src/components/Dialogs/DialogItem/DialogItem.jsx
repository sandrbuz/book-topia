import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';



let DialogItem = (props) => {           
    // let path = "/dialogs/" + props.id;  и можно вставить в путь как to={path};
    return (
        <div className={s.dialog}>        
            <img className={s.dialogAva} src={props.imgURL} alt="dialog avatar" />
            <NavLink className={({ isActive }) => isActive ? s.active : s.dialogLink} to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
