import React from 'react';
import s from './Header.module.css';
import Logo from '../../assets/images/Logo.svg';
import Logo2 from '../../assets/images/Logo2.svg'
import { NavLink } from 'react-router-dom';
import defaultUserAva from '../../assets/images/userImg.png';
import Preloader from '../common/Preloader/Preloader';



// http://svgur.com/i/sx9.svg более светлый логотип
const Header = (props) => {
    return (
        <header className={s.header}>
                <img className={s.logo} src={Logo} />
                {/* <img className={s.logo} src='http://svgur.com/i/rUY.svg' />  the same thing, only the path is absolute */}
                <h1 className={s.logoText}>BookTopia</h1>
                <div className={s.loginBlock}>
                    {/* {console.log(props.avatarSmall)} */}
                    { props.isFetching && <Preloader width={50}/>}
                    {props.isAuth ? <div className={ s.avaAndLogin}><img  src={props.avatarSmall ? props.avatarSmall : defaultUserAva}/>  <span> {props.login}</span></div>  : <NavLink to='/login'>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;