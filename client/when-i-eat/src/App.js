import { Switch, Route} from 'react-router-dom';
import './App.css';
import Account from './screens/Account';
import Home from './screens/Home';
import Login from './screens/Login';
import Stats from './screens/Stats'

function App() {
  return (
    <Switch>
      <div className="App">

        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/account'>
          <Account />
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
