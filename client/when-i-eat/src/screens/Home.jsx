import React from 'react';
import BreakfastTable from '../components/BreakfastTable'
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'


const useStyles = makeStyles({
    addIcon: {
      fontSize: '50px',
      marginRight: '60px'
    },
  });

function Home() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='breakfast-table-div'>
              <AddIcon className={classes.addIcon}/>
              <BreakfastTable />
            </div>
            <Navbar />
            <HomeFooter /> 
        </div>
    );
}

export default Home;