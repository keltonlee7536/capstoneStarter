import React from "react";
import Login from './Login';
import Courses from './Courses';
import Admin from './Admin';
import Home from './Home';
import SignUp from './SignUp';
import {  BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [rating, setRating] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/SignUp'} className="nav-link"> Sign Up </Link></li>
        <li><Link to={'/Login'} className="nav-link"> Login </Link></li>
        <li><Link to={'/Courses'} className="nav-link">Courses</Link></li>
        <li><Link to={'/Admin'} className="nav-link">Admin</Link></li>
      </ul>
      </nav>
      {/* <hr /> */}
      <Routes>
        <Route exact path='/' component={Home} />
          <Route path='/SignUp' component={SignUp} />
          <Route exact path='/Login' component={Login} />
          <Route path='/Courses' component={Courses} />
          <Route path='/Admin' component={Admin} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}


export default App;