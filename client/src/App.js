import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {OperationsOfAdmin} from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { FixedSideBar } from './components/userInterface/FixedSideBar';
import { Footer } from './components/userInterface/Footer';


export const App=()=> {
  return (
    <div className="App">
      <Router>
        <Link to="/admin">Please Click here....>Admin Operations</Link>
        <Switch>
          <Route path="/admin">
          <OperationsOfAdmin/>
          </Route>
          <Route path="/">
            <NavBar />
            <FixedSideBar />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


