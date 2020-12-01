import React from 'react';
import './Account.css'
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import ProfilePlaceholder from '../Assets/profile-placeholder.png'

function Account() {
    return (
        <div>
            <Header />
            <button type='submit' className='delete-button'>Delete Account</button>
            <div className='account-info'>
                <img className='profile-placeholder' src={ProfilePlaceholder} alt='logo' height='130' width='130' />
            </div>
            <Navbar />
            <div>
                <HomeFooter /> 
            </div>
        </div>
    );
}

export default Account;