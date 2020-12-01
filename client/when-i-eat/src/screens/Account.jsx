import React from 'react';
import './Account.css'
import HomeFooter from '../shared/HomeFooter';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';

function Account() {
    return (
        <div>
            <Header />
            <Navbar />
            <div>
                <HomeFooter /> 
            </div>
        </div>
    );
}

export default Account;