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
                <div className={styles.userNameWrapper}>{u.name}</div>
                <div className={styles.followButtonWrapper}>
                    {u.followed
                        ? <button className={`${styles.button} ${styles.unfollowButton}`} disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id, props.isAuth)
                        }}>Unfollow</button>
                        : <button className={`${styles.button} ${styles.followButton}`} disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id, props.isAuth)
                            // TODO: UNITE BUTTONS
                        }}>Follow</button>}
                </div>
            </span>
        </div>
    )

}
export default User;





{/* learned stopPropagation */ }
{/* <div onClick={()=>{console.log('container clicked')}} style={{backgroundColor: 'blue'}}>
                      <button onClick={(e)=>{console.log('btn clicked');
                    e.stopPropagation();}}>test</button>
                    </div> */}
