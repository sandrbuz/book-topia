import React from 'react';
import userImg from '../../assets/images/userImg.png';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followUnfollowAPI } from '../../api/api';



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.btnsWrapper}>
                {/* solution as in lesson 55 */}
                {/* {pages.map(p => <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage == p && styles.currPage} key={p}>{p}</span>)} */}
                {/* modified solution */}
                {pages.map(p => <span
                    onClick={() => { props.onPageChanged(p) }} className={`${styles.btnPaggination} ${props.currentPage == p ? styles.currPage : p > props.currentPage + 10 || p < props.currentPage - 15 ? styles.hide : styles.visible}`} key={p}>{p}</span>)}

                {props.currentPage < pages.length && <span>...</span>}
            </div>

            {props.isFetching && <Preloader />}

            {props.users.map(u => <div className={styles.userWrapper} key={u.id}>
                <span>
                    <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userImg} className={styles.userPhoto} /></NavLink>

                    <div>
                        {/* <button onClick={() => {u.followed ? props.unfollow(u.id) : props.follow(u.id)}} >{u.followed ? "Follow" : "Unfollow"}</button> */}
                        {u.followed
                            ? <button onClick={() => {
                                followUnfollowAPI.setUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) { props.unfollow(u.id) }
                                    })
                            }}>Unfollow</button>


                            : <button onClick={() => {
                                followUnfollowAPI.setFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) { props.follow(u.id) }
                                    })
                            }}>Follow</button>}
                    </div>
                    {/* learned stopPropagation */}
                    {/* <div onClick={()=>{console.log('container clicked')}} style={{backgroundColor: 'blue'}}>
                      <button onClick={(e)=>{console.log('btn clicked');
                    e.stopPropagation();}}>test</button>
                    </div> */}

                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                <br />
            </div>)}
        </div>
    )

}
export default Users;