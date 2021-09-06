import {React, useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/login page/Login';
// import Land from './components/Land/Land';


function App() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Land} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router> */}
      {/* {
        !user ?
        <Login setUser={setUser} />
        :
        <Home />
      } */}
      <Home />
    </div>
  );
}

export default App;
