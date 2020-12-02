import React from 'react';
import BreakfastTable from '../components/BreakfastTable';
import LunchTable from '../components/LunchTable';
import DinnerTable from '../components/DinnerTable';
import SnacksTable from '../components/SnacksTable';
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import AddIcon from '../components/AddIcon';
import './Home.css'



function Home() {

    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />

            <div className='breakfast-table-div'>
              <AddIcon />
              <BreakfastTable />
            </div>

            <div className='other-table-div'>
              <AddIcon />
              <LunchTable />
            </div>

            <div className='other-table-div'>
              <AddIcon />
              <DinnerTable />
            </div>

            <div className='other-table-div'>
              <AddIcon />
              <SnacksTable />
            </div>

            <Navbar />
            <HomeFooter /> 

        </div>
    );
}

export default Home;