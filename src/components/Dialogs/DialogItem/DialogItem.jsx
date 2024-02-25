import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


let DialogItem = (props) => {           


    return (
        <div >        
            <NavLink className={({ isActive }) => `${isActive ? s.active : s.dialogLink} ${s.dialog}`} to={"/dialogs/" + props.id}>
                <img className={s.dialogAva} src={props.imgURL} alt="dialog avatar" />
                 <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;
