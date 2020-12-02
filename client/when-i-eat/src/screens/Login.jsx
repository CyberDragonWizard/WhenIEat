import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import LogoImg from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div>
            <Header />
            <img className='header-logo-landing' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='log-in-body'>
             <h2 className='welcome'>Welcome!</h2>
             <h3 className='welcome-message'>WhenIEat is an easy to use nutrition application <br/> for you to tack your calories</h3>
             <h2 className='log-in'>Log In</h2>
             <form>
                 <input type='text' className='input' placeholder='Email'></input>
                 <br/>
                 <input type='password' className='input' placeholder='Password'></input>
                 <br/>
                 <div className='button-div'>
                 <NavLink to='/home'>
                    <button type='submit' className='button'>Log In</button>
                 </NavLink>
                 </div>
             </form>
             <h3 className='welcome-message'>Or</h3>
             <button type='submit' className='button'>Sign Up</button>
            <Footer />
            </div>
        </div>
    );
}

export default Login;