import './App.css';
import React from 'react';
import Router from "./Rooter/router";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <HomePage>
        <Router />
      </HomePage>

    </>

  );
}

export default App;
