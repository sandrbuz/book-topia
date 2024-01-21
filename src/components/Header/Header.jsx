import React from 'react';
import s from './Header.module.css';
import Logo from '../../assets/images/Logo.svg';
import Logo2 from '../../assets/images/Logo2.svg'
import { NavLink } from 'react-router-dom';
import defaultUserAva from '../../assets/images/userImg.png';
import Preloader from '../common/Preloader/Preloader';
import logoutIcon from '../../assets/images/logoutIcon.png'

const Header = (props) => {
    return (
        <header className={s.header}>
                <img className={s.logo} src={Logo} />
                <h1 className={s.logoText}>BookTopia</h1>
                <div className={s.loginBlock}>
                    { props.isFetching && <Preloader width={50}/>}
                    {props.isAuth ? <div className={ s.avaAndLogin}><img  src={props.avatarSmall ? props.avatarSmall : defaultUserAva}/>  <span> {props.login}</span><img onClick={props.logout} src={logoutIcon} alt='logoutIcon'/></div>  : <NavLink to='/login'>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;