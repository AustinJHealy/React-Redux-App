import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
  
function App() {
  
  useEffect(()=> {
  axios.get("https://rickandmortyapi.com/api/character/")
  .then((res) => {
    console.log(res.data.results);
    
    })
  .catch(err => console.log(err));
  });
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
