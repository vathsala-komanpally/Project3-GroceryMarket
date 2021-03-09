import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
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
    console.log("category Id is:", e);
    setSelectedCategoryId(e);
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
    <div>
      <Container>
        <Tab.Container id="left-tabs-example">
          <Row>
            <Col md={10}>
            <div >
              <Navbar bg="light" expand="lg" style={{ position:'relative'}}>
                <Navbar.Brand>Categories: </Navbar.Brand>
                <Nav className="mr-auto" >

                  {categories.map((categoryDetails) => (
                    <Nav.Link onSelect={handleOnClickCategoryName} eventKey={categoryDetails._id} key={categoryDetails._id}>{categoryDetails.name}</Nav.Link>
                  ))}
                 
                </Nav>
              </Navbar>
              </div>
            </Col>
            <Col>

              <ItemsDisplay itemsList={itemsList} cart={handleCart} />
            </Col>
          </Row>
        </Tab.Container>

      </Container>
    </div>
  )
}

export { FixedSideBar };


