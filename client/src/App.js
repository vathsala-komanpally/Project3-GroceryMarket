import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {OperationsOfAdmin} from "./components/admin/OperationsOfAdmin";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App=()=> {
  return (
    <div className="App">
      <h1>App is running</h1>
      <Router>
        <Link to="/admin/operations">Admin Operations</Link>
        <Switch>
          <Route path="/admin/operations">
          <OperationsOfAdmin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


