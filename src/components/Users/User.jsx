import React from 'react';
import userImg from '../../assets/images/userImg.png';
import styles from './User.module.css';
import { NavLink } from 'react-router-dom';



const User = ({ user, followingInProgress, unfollow, follow, ...props }) => {
    let u = user;
    return (
        <div className={styles.userItemWrapper} key={u.id}>
            <span className={styles.userImageWrapper}>
                <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userImg} className={styles.userPhoto} /></NavLink>
            </span>
            <span className={styles.btnAndNameWrapper}>
                <div className={styles.userNameWrapper}><NavLink to={'/profile/' + u.id} className={styles.link}>{u.name}</NavLink></div>
                <div className={styles.followButtonWrapper}>
                        <button className={`${styles.button} ${u.followed ? styles.unfollowButton : styles.followButton}`} onClick={() => {u.followed ? unfollow(u.id, props.isAuth) : follow(u.id, props.isAuth)}} disabled={followingInProgress.some(id => id === u.id)}>{u.followed ? "Unfollow" : "follow"}</button>
                </div>
            </span>
        </div>
    )

}
export default User;
