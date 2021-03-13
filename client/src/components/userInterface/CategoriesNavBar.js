import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router } from "react-router-dom";

const CategoriesNavBar = (props) => {
  const [categories, setCategories] = useState([]);
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

  const handleCart = (cartDeatils) => {
    setCart(cartDeatils);
    console.log("in fixed side Bar component:", cart);
    props.cart(cart);
  }

  return (
    <Router>
      <Navbar bg="light" expand="lg" style={{ position: 'relative' }}>
        <Navbar.Brand>Categories: </Navbar.Brand>
        <Nav className="mr-auto" >
          {categories.map((categoryDetails) => (
            <Nav.Link key={`/shop/${categoryDetails._id}`} href={`/shop/${categoryDetails._id}`}>{categoryDetails.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Router>
  )
}

export { CategoriesNavBar };


