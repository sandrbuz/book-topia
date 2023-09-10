import React from "react";
import userImg from '../../assets/images/userImg.png';
import styles from "./Users.module.css";



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
   return (
    <div className={styles.wrapper}>
                <div>
                {/* solution as in lesson 55 */}
                    {/* {pages.map(p => <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage == p && styles.currPage} key={p}>{p}</span>)} */}
                {/* modified solution */}
                    {pages.map(p => <span
                        onClick={() => { props.onPageChanged(p) }} className={`${styles.btnPaggination} ${props.currentPage == p ?styles.currPage : p > props.currentPage + 10 || p < props.currentPage - 10 ?styles.hide :styles.visible}`} key={p}>{p}</span>)}

                    {props.currentPage < pages.length && <span>...</span>}
                </div>

                {props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : userImg} className={styles.userPhoto} /></div>
                        <div>
                            {/* <button onClick={() => {u.followed ? props.unfollow(u.id) : props.follow(u.id)}} >{u.followed ? "Follow" : "Unfollow"}</button> */}
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                        <br />
                        <br />
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
                </div>)}
            </div>
    )

}
export default Users;