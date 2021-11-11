import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cars from './Pages/CarComponents/Cars/Cars';
import Home from './Pages/HomeComoponents/Home/Home';
import AuthProvider from './context/AuthProvider'

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

          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
