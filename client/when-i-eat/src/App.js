import { Switch, Route} from 'react-router-dom'
import './App.css';
import Account from './screens/Account'
import Login from './screens/Login'

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

      </div>
    </Switch>
  );
}

export default App;
