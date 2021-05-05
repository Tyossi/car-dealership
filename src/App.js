import React from "react";
import NavBar from "./components/navbar/navbar.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import SearchResult from "./pages/search-result/search.result.page";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchResult} />
      </Switch>
    </div>
  );
};

export default App;
