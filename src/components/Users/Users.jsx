import React from 'react';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { useState } from 'react';
import { useEffect } from 'react';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {

    const [typingTimer, setTypingTimer] = useState(null);
    const doneTypingInterval = 500; //Adjust as needed
    const [inputValue, setInputValue] = useState(() => {
        // Retrieve input value from local storage
        return localStorage.getItem('searchInputValue') || '';
    });

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Clear input value from local storage before unloading the page
            localStorage.removeItem('searchInputValue');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            clearTimeout(typingTimer);
        };
    }, [typingTimer]);

    const handleInputChange = (event) => {
        clearTimeout(typingTimer);
        const timer = setTimeout(() => doneTyping(event.target.value), doneTypingInterval);
        setTypingTimer(timer);
        setInputValue(event.target.value);
    };

    const doneTyping = (value) => {
        localStorage.setItem('searchInputValue', value); // Store input value in local storage
        props.onSearchUser(value);
    };

    let customStylesForPreloader = { //for Preloader
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
    }

    return (
        <div className={styles.wrapper}>
            <input className={styles.searchInput} type="text" value={inputValue} onChange={handleInputChange} placeholder="search user" />
            {(props.users.length === 0 && props.isReceivedResponse) && <div>no such user</div>}
            {props.isFetching && <Preloader customStyles={customStylesForPreloader} />}
            <div className={styles.usersItems}>
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

export default Users;