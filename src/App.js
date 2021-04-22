import React from "react";
import NavBar from "./components/navbar/navbar.component";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
