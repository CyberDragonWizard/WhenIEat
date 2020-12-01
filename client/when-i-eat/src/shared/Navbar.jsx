import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
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
