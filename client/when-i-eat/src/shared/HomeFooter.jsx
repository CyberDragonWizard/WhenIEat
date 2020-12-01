import React from 'react';
import LogoImg from '../Assets/logo.png';
import './HomeFooter.css'

export default function HomeFooter() {
    return (
        <div className='home-footer'>
            <h3 className='copyright-home'>© WhenIEat 2020</h3>
            <img className='home-footer-logo' src={LogoImg} alt='logo' height='50' width='50' />
        </div>
    )
}
