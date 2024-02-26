import React from 'react';
import s from './Header.module.css';
import Logo from '../../assets/images/Logo.svg';
import Logo2 from '../../assets/images/Logo2.svg'
import { NavLink } from 'react-router-dom';
import defaultUserAva from '../../assets/images/userImg.png';
import Preloader from '../common/Preloader/Preloader';
import logoutIcon from '../../assets/images/logoutIcon.png'

const Header = (props) => {

    // if (!props.profile) {
    //     return <Preloader />
    // }
    let customStyles = {
        width: '50px',
        // height: '20px',
    };

    return (
        <header className={s.header}>
                <img className={s.logo} src={Logo} />
                <h1 className={s.logoText}>BookTopia</h1>
                <div className={s.loginBlock}>
                    { props.isFetching && <Preloader customStyles={customStyles}/>}
                    {props.isAuth ? <div className={ s.avaAndLogin}><img className={s.miniAvatar}  src={props.avatarSmall ? props.avatarSmall : defaultUserAva}/>  <span className={s.miniLogin}> {props.login}</span><img className={s.logoutImg} onClick={props.logout} src={logoutIcon} alt='logoutIcon'/></div>  : <NavLink to='/login'><u>Login</u></NavLink>}
                </div>
        </header>
    )
}

export default Header;