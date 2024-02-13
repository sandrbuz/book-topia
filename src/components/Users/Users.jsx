import React from 'react';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';



const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged,...props}) => {

    return (
        <div className={styles.wrapper}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {console.log(props.users)}
            {props.isFetching && <Preloader />}
            <div>
            {props.users.map(u => <User user={u}
                                        followingInProgress={props.followingInProgress}
                                        key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        isAuth={props.isAuth}
            />)}
            </div>
        </div>
    )

}
export default Users;