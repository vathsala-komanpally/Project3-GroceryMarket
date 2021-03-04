import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {OperationsOfAdmin} from "./components/admin/OperationsOfAdmin";
import {ItemsDisplay} from "../src/components/userInterface/ItemsDisplay";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App=()=> {
  return (
    <div className="App">
      <h1>App is running</h1>
      <Router>
        <Link to="/admin/operations">Admin Operations</Link>
        <Link to="/user">UserInterface</Link>
        <Switch>
          <Route path="/admin/operations">
          <OperationsOfAdmin/>
          </Route>
          <Route path="/user">
            <ItemsDisplay/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


