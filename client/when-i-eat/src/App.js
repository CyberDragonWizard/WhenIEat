import { useState, useEffect } from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';
import './App.css';
import Account from './screens/Account';
import Home from './screens/Home';
import Login from './screens/Login';
import Stats from './screens/Stats';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <Switch>
      <div className="App">

        <Route exact path='/'>
          <Login handleLogin={handleLogin} handleRegister={handleRegister}/>
        </Route>

        <Route exact path='/account'>
          <Account currentUser={currentUser} handleLogout={handleLogout}/>
        </Route>

        <Route exact path='/home'>
          <Home />
        </Route>

        <Route exact path='/stats'>
          <Stats />
        </Route>

      </div>
    </Switch>
  );
}

export default App;
