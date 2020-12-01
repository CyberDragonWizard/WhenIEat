import React from 'react';
import LogoImg from '../Assets/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'> 
            <img className='header-logo' src={LogoImg} alt='logo' height='130' width='130' />
        </div>
    );
};

export default Header;