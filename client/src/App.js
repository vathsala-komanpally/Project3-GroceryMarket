import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OperationsOfAdmin } from "./components/admin/OperationsOfAdmin";
import { NavBar } from './components/userInterface/NavBar';
import { ItemsDisplay } from './components/userInterface/ItemsDisplay';
import { Footer } from './components/userInterface/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About'
import { Catalogue } from './components/pages/Catalogue'
import { Reciepes } from './components/pages/Recipes'
import { Contact } from './components/pages/Contact'

export const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <NavBar cart={cart}/>
        <Footer />
        <Link to="/admin">Please Click here to do:Admin Operations</Link>
        <Switch>
          <Route path="/admin" component={OperationsOfAdmin}></Route>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/catalogue" component={Catalogue} ></Route>
          <Route path="/reciepes" component={Reciepes}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/shop/:id" ><ItemsDisplay cart={cart} seCart={setCart}/></Route>
        </Switch>

      </div>
    </Router>
  );
};
 //<Route path="/shop/:id" component={ ItemsDisplay}></Route>
//<Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} />
// <Child foo={bar => <div>Hello {bar}!</div>} />;
// <Route path="/some/url" render={() => <h3>Hello.</h3>} />
