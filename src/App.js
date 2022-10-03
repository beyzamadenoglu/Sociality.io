import './App.css';
import React from 'react';
import Router from "./Router/router";
import HomePage from "./pages/HomePage";
import "../src/components/Style.css";


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
