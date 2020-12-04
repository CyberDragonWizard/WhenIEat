import React from 'react';
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import './Stats.css';

export default function Stats() {
    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
             <h3 className='stats'>Stats</h3>
            <Navbar />
            <HomeFooter /> 
        </div>
    )
}
