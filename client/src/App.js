import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
// import logo from "./logo.svg";
import "./App.css";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route component={NoMatchRoute} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
