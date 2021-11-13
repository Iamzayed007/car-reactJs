import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cars from './Pages/CarComponents/Cars/Cars';
import Home from './Pages/HomeComoponents/Home/Home';
import AuthProvider from './context/AuthProvider'
import Dashboard from './Pages/DashboardComponents/Dashboard/Dashboard';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cars">
              <Cars />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
