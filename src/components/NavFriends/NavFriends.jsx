import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./NavFriends.module.css"
import Friend from './Friend/Friend';


// let Friends = [
//     {name: "Andrew", imgUrl: "https://android-obzor.com/wp-content/uploads/2022/02/1-9.jpg"},
//     {name: "Sasha", imgUrl: "https://klike.net/uploads/posts/2018-06/1528374055_2.jpg"},
//     {name: "Sveta", imgUrl: "https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg"},
// ]



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