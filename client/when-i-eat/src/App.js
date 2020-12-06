import { useState, useEffect } from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';
import './App.css';
import Account from './screens/Account';
import Home from './screens/Home';
import Login from './screens/Login';
import Stats from './screens/Stats';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { destroyMeal, getAllMeals, postMeal, putMeal } from './services/meals'

function App() {
  const [editingId, setEditingId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentDay, setCurrentDay] = useState('');
  const [meals, setMeals] = useState([]);
  const history = useHistory();
    
    useEffect(() => {
     
      const fetchMeals = async () => {
        const mealData = await getAllMeals();
        setMeals(mealData)
      }
      fetchMeals();
    }, [])

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

  //=================
  //===== auth ======
  //=================

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  //=================
  //===== meals =====
  //=================

  const handleDelete = async (id) => {
    await destroyMeal(id);
    setMeals(prevState => prevState.filter(meal => meal.id !== id))
  }

  const handleCreate = async (mealData) => {
    const newMeal = await postMeal({...mealData, day_id: currentDay.id})
    setMeals(prevState => [...prevState, newMeal])
  }

  const handleUpdate = async (id, mealData) => {
    const updatedMeal = await putMeal(id, mealData);
    setMeals(prevState => prevState.map(meal => {
      return meal.id === Number(id) ? updatedMeal : meal
    }))
  }

  return (
      <div className="App">
        <Switch>

        <Route exact path='/'>
          <Login handleLogin={handleLogin} handleRegister={handleRegister}/>
        </Route>

        <Route exact path='/account'>
          <Account currentUser={currentUser} handleLogout={handleLogout}/>
        </Route>

        <Route exact path='/home'>
          <Home 
          meals={meals}
          handleDelete={handleDelete}
          setCurrentDay={setCurrentDay}
          currentUser={currentUser}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          setEditingId={setEditingId}
          />
        </Route>

        <Route exact path='/stats'>
          <Stats />
        </Route>
        </Switch>
      </div>
  );
}

export default App;
