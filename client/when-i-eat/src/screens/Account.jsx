import React from 'react';
import './Account.css'
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import Navbar from '../shared/Navbar';
import ProfilePlaceholder from '../Assets/profile-placeholder.png'
import { NavLink } from 'react-router-dom';

function Account() {
    return (
        <div>
            <Header />
            <img className='header-logo-home' src={LogoImg} alt='logo' height='110' width='110' />
            <button type='submit' className='delete-button'>Delete Account</button>
            <div className='account-info'>
                <h1 className='your-account'>Your Account</h1>
                <img className='profile-placeholder' src={ProfilePlaceholder} alt='logo' height='130' width='130' />
                <input type='text' className='account-input' placeholder='Name'></input>
                 <br/>
                 <input type='text' className='account-input' placeholder='Age'></input>
                 <br/>
                 <input type='text' className='account-input' placeholder='Height'></input>
                 <br/>
                 <input type='text' className='account-input' placeholder='Weight'></input>
                 <button type='submit' className='save-button'>Save Changes</button>
                 <NavLink to='/'>
                    <button type='submit' className='logout-button'>Log Out</button>
                 </NavLink>
            </div>
            <Navbar />
            <HomeFooter /> 
        </div>
    );
}

export default Account;