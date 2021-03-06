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



function Home(props) {

    return (
        <div>
            <Header 
            />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='table-div'>
      
              <div className='date-menu-div'>
                <AddDateModal/>
                < DateMenu
                setCurrentDay={props.setCurrentDay}
                 />
              </div>

              <div className='breakfast-table-div'>
                <AddBreakfastModal 
                handleCreate={props.handleCreate}
                />
                <BreakfastTable
                meals={props.meals}
                handleDelete={props.handleDelete}
                setEditingId={props.setEditingId}
                handleUpdate={props.handleUpdate}
                />
              </div>

              <div className='other-table-div'>
                <AddLunchModal
                handleCreate={props.handleCreate}
                 />
                <LunchTable
                meals={props.meals}
                handleDelete={props.handleDelete}
                setEditingId={props.setEditingId}
                handleUpdate={props.handleUpdate}
                 />
              </div>

              <div className='other-table-div'>
                <AddDinnerModal
                handleCreate={props.handleCreate}
                />
                <DinnerTable
                meals={props.meals}
                handleDelete={props.handleDelete}
                setEditingId={props.setEditingId}
                handleUpdate={props.handleUpdate}
                />
              </div>

              <div className='other-table-div'>
                <AddSnacksModal
                handleCreate={props.handleCreate}
                />
                <SnacksTable
                meals={props.meals}
                handleDelete={props.handleDelete}
                setEditingId={props.setEditingId}
                handleUpdate={props.handleUpdate}
                />
              </div>
            </div>

            <Navbar
            currentuser={props.currentUser}
             />
             {props.children}
            <HomeFooter /> 

        </div>
    );
}

export default Home;