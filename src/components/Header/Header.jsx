import React from 'react';
import s from './Header.module.css';

// http://svgur.com/i/sx9.svg более светлый логотип
const Header = () => {
    return (
        <header className={s.header}>
                <img className={s.logo} src='http://svgur.com/i/rUY.svg' />
                <h1 className={s.logoText}>BookTopia</h1>
        </header>
    )
}

export default Header;