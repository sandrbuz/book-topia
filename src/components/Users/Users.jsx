import React from "react";
import styles from "./Users.module.css";





const Users = (props) => {
// debugger
    if(props.users.length === 0){
        props.setUsers([
            { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 1, fullname: 'Dmirty', status: "I am a boss", location: { city: 'Minsk', country: 'Belarus' }, followed: false },
            { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 2, fullname: 'Sasha', status: "I am a boss too", location: { city: 'Moscow', country: 'Russia' }, followed: true },
            { photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330', id: 3, fullname: 'Andrew', status: "I am a boss too", location: { city: 'Kiev', country: 'Ukraina' }, followed: false },
        ]);
    }

    return (
        <div className={styles.wrapper}>
              {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                    <div>
                        {/* <button onClick={() => {u.followed ? props.unfollow(u.id) : props.follow(u.id)}} >{u.followed ? "Follow" : "Unfollow"}</button> */}
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                    </span>
                    <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                    </span>
                </span>
              </div> )}
        </div>
    )
}
export default Users;