// client/src/App.js

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <div>
          <input placeholder="enter (h1-5)" onChange={(e) => setRating(e.target.value)}/>
          <button onClick={handleSubmitRating}>add</button>
          <h3>{rating ? rating : null}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;