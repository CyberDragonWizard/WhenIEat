import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import ProfilePlaceholder from '../Assets/profile-placeholder.png'

export default function Navbar(props) {
    const { currentUser } = props;
    return (
        <div className='navbar'>
            <div className='nav-account-div'>
                <NavLink to='/account' style={{ textDecoration: 'none' }}>
                    <h3 className='nav-account-title'>My Account</h3>
                </NavLink>

                <NavLink to='/account'>
                <img className='nav-profile-placeholder' src={ProfilePlaceholder} alt='logo' height='110' width='110' />
                </NavLink>
                <div>
                    {
                    currentUser ?
                    <>
                    <h3 className='nav-account-info'>{currentUser.name}</h3>
                    <h3 className='nav-account-info'>Age: {currentUser.age}</h3>
                    <h3 className='nav-account-info'>Height: {currentUser.height} (in)</h3> 
                    <h3 className='nav-account-info'>Weight: {currentUser.weight} (lbs)</h3> 
                    </>
                    :
                    <div></div>
                }
                </div>
            </div>
            <hr className='nav-line'/>
            <div className='nav-button-div'>
                {
                currentUser &&
                <>

                <NavLink to='/home'>
                    <button type='submit' className='nav-button'>Enter Calories</button>
                </NavLink>

                <NavLink to='/stats'>
                    <button type='submit' className='nav-button'>View Stats</button>
                </NavLink>
                </>
                }
            </div>   
        </div>
    )
}
