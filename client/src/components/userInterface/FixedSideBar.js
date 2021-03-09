import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { ItemsDisplay } from './ItemsDisplay';




const FixedSideBar = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [itemsList, setItemsList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/api/groceryItems/category/all', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      return response.json();
    }).then((groceryCategories) => {
      setCategories(groceryCategories);
    });
  }, []);

  const handleOnClickCategoryName = (e) => {
    console.log("category Id is:", e.target.value);
    setSelectedCategoryId(e.target.value);
    fetch(`http://localhost:9000/api/groceryItems/category/${selectedCategoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      console.log("responses", response);
      return response.json();
    }).then((items) => {
      console.log("items from DB", items);
      setItemsList(items);
    });
    console.log("items cliked are:", itemsList);
  }
  const handleCart = (cartDeatils) => {
    setCart(cartDeatils);
    console.log("in fixed side Bar component:", cart);
    props.cart(cart);
  }

  return (
<Router>
    <div>
      <Container>
        <Tab.Container id="left-tabs-example">
          <Row>
            <Col md={22}>
            <div >
              <Navbar bg="light" expand="lg" style={{ position:'relative'}}>
                <Navbar.Brand>Categories: ........................</Navbar.Brand>
                <Nav className="mr-auto" >
                 <Link to='/shop/category'>
                  {categories.map((categoryDetails) => (
                    <Button variant="outline-info" size="lg" onClick={handleOnClickCategoryName} key={categoryDetails._id} 
                    value={categoryDetails._id}>{categoryDetails.name}</Button> 
                  ))}
                </Link>
                </Nav>
              </Navbar>
              </div>
            </Col>
            <Col>
            <Switch>
              <Route path='/shop/category'><ItemsDisplay itemsList={itemsList} cart={handleCart} /></Route>
            </Switch>
            </Col>
          </Row>
        </Tab.Container>

      </Container>
    </div>
    </Router>
  )
}

export { FixedSideBar };


