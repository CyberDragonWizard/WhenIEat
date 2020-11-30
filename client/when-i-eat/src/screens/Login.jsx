import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import './Login.css';

function Login() {
    return (
        <div>
            <Header />
             <h2 className='welcome'>Welcome!</h2>
             <h3 className='welcome-message'>WhenIEat is an easy to use nutrition application <br/> for you to tack your calories</h3>
             <h2 className='log-in'>Log In</h2>
             <form>
                 <input type='text' className='input' placeholder='Email'></input>
                 <br/>
                 <input type='password' className='input' placeholder='Password'></input>
                 <br/>
                 <button type='submit' className='button'>Log In</button>
             </form>
             <h3 className='welcome-message'>Or</h3>
             <button type='submit' className='button'>Sign Up</button>
            <Footer />
            
        </div>
    );
}

export default Login;