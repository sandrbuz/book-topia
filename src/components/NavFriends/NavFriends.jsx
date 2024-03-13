import React from 'react';
import s from './NavFriends.module.css'
import Friend from './Friend/Friend';


const NavFriends = (props) => {

    let friendsElements = props.friends.map( f => <Friend name={f.name} imgUrl={f.imgUrl} id={f.id} key={f.id}/>)

    return (
        <div className={s.navFriends}>
            <h3 className={s.head}>Friends</h3>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </div>
    )
}

export default NavFriends;