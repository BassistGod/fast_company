import React from "react";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import Users from "./layouts/users";
import Login from "./layouts/login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </>
  );
}

export default App;
