import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Friend.module.css"


const Friend = (props) => {
    return (
                <NavLink className={s.item}>
                    <img className={s.friendImg} src={props.imgUrl} alt="ava" />
                    <div>{props.name}</div>
                </NavLink>
    )
}

export default Friend;