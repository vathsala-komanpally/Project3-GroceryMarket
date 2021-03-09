import React,{useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {OperationsOfAdmin} from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { FixedSideBar } from './components/userInterface/FixedSideBar';
import { Footer } from './components/userInterface/Footer';


export const App=()=> {
  const [cart, setCart] = useState([]);
  const handleCartDeatils=(cartDeatils)=>{
    setCart(cartDeatils);
    console.log("in App component:", cart);
  }
  return (
    <div className="App">
      <Router>
        <Link to="/admin">Please Click here....>Admin Operations</Link>
        <Switch>
          <Route path="/admin">
          <OperationsOfAdmin/>
          </Route>
          <Route path="/">
            <NavBar cart={cart}/>
            <FixedSideBar cart={handleCartDeatils}/>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


