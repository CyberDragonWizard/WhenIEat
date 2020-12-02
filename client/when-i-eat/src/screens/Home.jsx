import React from 'react';
import BreakfastTable from '../components/BreakfastTable'
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import './Home.css'




function Home() {
    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='table-div'>
              <BreakfastTable />
            </div>
            <Navbar />
            <HomeFooter /> 
        </div>
    );
}

export default Home;