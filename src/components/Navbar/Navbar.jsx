import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import s from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';


const Navbar = (props) => {

//  _______________________________________________________________ We check if the current path is the root path ('/') using window.location.pathname. If it is, we programmatically navigate to the /profile path using navigate('/profile')(60 lesson).
// (in your own words, if path = 'http://localhost:3000/' , then profile NavLink is automatically clicked)

const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/profile');
    }
  }, [navigate]);
// _______________________________________________________________

  
  return (
    <nav className={s.nav}>
      <div className={s.links}>
      <div className={s.item + " " + s.item1}>
        <NavLink   to='/profile'  className={({ isActive }) => isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to='/dialogs' className={({ isActive }) => isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      {/* <div className={s.item}>
        <NavLink to='/news' className={({ isActive }) => isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={({ isActive }) => isActive ? s.active : s.item}>Music</NavLink>
      </div> */}
      {/* <div className={s.item}>
        <NavLink to='/settings' className={({ isActive }) => isActive ? s.active : s.item}>Settings</NavLink>
      </div> */}
      <div className={s.item}>
        <NavLink to='/users' className={({ isActive }) => isActive ? s.active : s.item}>Users</NavLink>
      </div>
      </div>
      
      {/* <NavFriends state={props.state}/> */}

    </nav>
  )
}

export default Navbar;