import { useState } from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import SignUpModal from '../components/SignUpModal'
import LogoImg from '../Assets/logo.png';
import './Login.css';

function Login(props) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }))
    }

    return (
        <div>
            <Header />
            <img className='header-logo-landing' src={LogoImg} alt='logo' height='110' width='110' />
            <div className='log-in-body'>
             <h2 className='welcome'>Welcome!</h2>
             <h3 className='welcome-message'>WhenIEat is an easy to use nutrition application <br/> for you to tack your calories</h3>
             <h2 className='log-in'>Log In</h2>
             <form onSubmit={(e) => {
                 e.preventDefault();
                 props.handleLogin(formData);
             }}>
                 <input
                 name='email'
                 type='text' 
                 className='input' 
                 placeholder='Email'
                 value={formData.email}
                 onChange={handleChange}
                 />
                 <br/>
                 <input 
                 name='password'
                 type='password' 
                 className='input' 
                 placeholder='Password'
                 value={formData.password}
                 onChange={handleChange}    
                 />
                 <br/>
                 <div className='button-div'>
                 {/* <NavLink to='/home'> */}
                    <button type='submit' className='button'>Log In</button>
                 {/* </NavLink> */}
                 </div>
             </form>
             <h3 className='welcome-message'>Or</h3>
             <SignUpModal />
            <Footer />
            </div>
        </div>
    );
}

export default Login;