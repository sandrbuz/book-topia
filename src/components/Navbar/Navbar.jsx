import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/profile');
    }
  }, [navigate]);

  return (
    <nav className={s.nav}>
      <div className={s.links}>
        <div className={s.item}>
          <NavLink to='/profile' className={({ isActive }) => isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        {props.currentDialogId == 1 ?
          <div className={s.item}>
            <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : s.item}>Messages</NavLink>
          </div> :
          <div className={s.item}>
            <NavLink to={`/dialogs/${props.currentDialogId}`} className={({ isActive }) => isActive ? s.active : s.item}>Messages</NavLink>
          </div>
        }


        <div className={s.item}>
          <NavLink to='/users' className={({ isActive }) => isActive ? s.active : s.item}>Users</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;