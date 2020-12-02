import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import ProfilePlaceholder from '../Assets/profile-placeholder.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-account-div'>
                <h3 className='nav-account-title'>My Account</h3>
                <img className='nav-profile-placeholder' src={ProfilePlaceholder} alt='logo' height='110' width='110' />
                <h3 className='nav-account-info'>Name</h3>
                <h3 className='nav-account-info'>Height</h3>
                <h3 className='nav-account-info'>Weight</h3>
            </div>
            <hr className='nav-line'/>
            <div className='nav-button-div'>

                <NavLink to='/home'>
                    <button type='submit' className='nav-button'>Enter Calories</button>
                </NavLink>

                <NavLink to='/stats'>
                    <button type='submit' className='nav-button'>View Stats</button>
                </NavLink>

            </div>   
        </div>
    )
}
