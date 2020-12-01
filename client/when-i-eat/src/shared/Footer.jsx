import React from 'react';
import LogoImg from '../Assets/logo.png';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h3 className='copyright-login'>© WhenIEat 2020</h3>
            <img className='footer-logo' src={LogoImg} alt='logo' height='50' width='50' />
        </div>
    );
}

export default Footer;