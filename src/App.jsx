import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

function App() {

  useEffect(() => {
    (async () => {
      const data = ((await axios.get(url)).data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
    <h1>Upload Test</h1>

    </div>
  )
}

export default App
