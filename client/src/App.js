// client/src/App.js

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import login from './Login';
import admin from './Admin';
import courses from './Courses'
import navbar from './Navbar'

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const [data, setData] = useState(null);
  const[rating, setRating] = useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  //const handleChanges = (e) =>{}

  const handleSubmitRating = () =>{
    fetch('/rating', {
      method:'POST',
      body:JSON.stringify({
        rating: rating
      }),
      headers: {
        'Content-type':'application/json; charset=UTF-8'
      }
    })
    .then((response) =>{
      return response.json()
    })
    .then((data) =>{
      if(data.rating){
        setRating(data.rating)
      }
    })
    .catch(err => console.error('Error', err))

  }

  function test(){
    console.log('test-function')
    console.log(login)
    console.log(admin)
    console.log(courses)

  }

  return (
    <div className="App">
       
          {/*
          <input placeholder="enter (h1-5)" onChange={(e) => setRating(e.target.value)}/>
          <button onClick={handleSubmitRating}>add</button>
          <h3>{rating ? rating : null}</h3>
          <button onclick="testpage()">testpage()</button>
          */}

          navbar

          <h1>home page</h1>
            
            <BrowserRouter>
              <Routes>

                <Route exact path='/'>
                  <login />
                </Route>

                <Route path='/admin'>
                  <admin />
                </Route>

                <Route path='/courses'>
                  <courses />
                </Route>

              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;