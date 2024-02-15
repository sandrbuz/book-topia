import React from 'react';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { Field, reduxForm } from 'redux-form';



const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {

    let onSearchUser = (values) => {   // instead onSubmit
       props.onSearchUser(values)
    }

    return (
        <div className={styles.wrapper}>
            <SearchUsersFormReduxForm onSubmit={onSearchUser}/>
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
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        </div>
    )

}

const SearchUsersForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.addNewMessage}>
            <Field name="searchedUserName" component={"textarea"} placeholder='Enter user name' />
            <button type={"submit"}>search</button>
        </form>
    )
}
const SearchUsersFormReduxForm = reduxForm({ form: "searchUser", destroyOnUnmount: false })(SearchUsersForm)


export default Users;