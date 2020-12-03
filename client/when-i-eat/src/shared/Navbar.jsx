import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import ProfilePlaceholder from '../Assets/profile-placeholder.png'

export default function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='nav-account-div'>
                <NavLink to='/account' style={{ textDecoration: 'none' }}>
                    <h3 className='nav-account-title'>My Account</h3>
                </NavLink>

                <NavLink to='/account'>
                <img className='nav-profile-placeholder' src={ProfilePlaceholder} alt='logo' height='110' width='110' />
                </NavLink>

                <h3 className='nav-account-info'>{props.currentUser.name}</h3>
                {/* <h3 className='nav-account-info'>{props.currentUser.height}</h3>
                <h3 className='nav-account-info'>{props.currentUser.weight}</h3> */}
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
