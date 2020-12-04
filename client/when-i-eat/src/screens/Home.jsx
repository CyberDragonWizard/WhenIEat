import React from 'react';
import BreakfastTable from '../components/BreakfastTable';
import LunchTable from '../components/LunchTable';
import DinnerTable from '../components/DinnerTable';
import SnacksTable from '../components/SnacksTable';
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import DateMenu from '../components/DateMenu';
import AddDateModal from '../components/AddDateModal';
import AddBreakfastModal from '../components/AddBreakfastModal';
import AddLunchModal from '../components/AddLunchModal';
import AddDinnerModal from '../components/AddDinnerModal';
import AddSnacksModal from '../components/AddSnacksModal';
import './Home.css';



function Home() {

    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='table-div'>
            <h2 className='calorie-counter'>Calories: 0</h2>
            <div className='date-menu-div'>
              <AddDateModal/>
              <DateMenu />
            </div>

            <div className='breakfast-table-div'>
              <AddBreakfastModal />
              <BreakfastTable />
            </div>

            <div className='other-table-div'>
              <AddLunchModal />
              <LunchTable />
            </div>

            <div className='other-table-div'>
              <AddDinnerModal />
              <DinnerTable />
            </div>

            <div className='other-table-div'>
              <AddSnacksModal />
              <SnacksTable />
            </div>
            </div>

            <Navbar />
            <HomeFooter /> 

        </div>
    );
}

export default Home;