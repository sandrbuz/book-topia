import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import s from "./Navbar.module.css"
import NavFriends from './NavFriends/NavFriends';


const Navbar = (props) => {

//   let profileLink = document.querySelector('.profileLink');

//   const location = useLocation();

//   const isFirstLinkActive = location.pathname === '/profile';
//   const isSecondLinkActive = location.pathname === '/dialogs';

//  let def = [];
//   if(location.pathname === '/dialogs' == false && location.pathname === '/news' == false && location.pathname === '/music' == false && location.pathname === '/settings' == false){
//     def.push('s.active')
//   } else {
//     def.shift();
//   }

  
  return (
    <nav className={s.nav}>
      <div className={s.links}>
      <div className={s.item + " " + s.item1}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to='/dialogs' className={({ isActive }) => isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={({ isActive }) => isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={({ isActive }) => isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={({ isActive }) => isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      </div>
      
      {/* <NavFriends state={props.state}/> */}

    </nav>
  )
}

export default Navbar;