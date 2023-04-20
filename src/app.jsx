import React from "react";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import Users from "./layouts/users";
import Login from "./layouts/login";
import { Redirect, Route, Switch } from "react-router-dom";
import UserPage from "./layouts/userPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:userId?" component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
