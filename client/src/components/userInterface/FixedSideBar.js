import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


const FixedSideBar = () => {
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

        const addToCart = (itemDetails) => {
            setCart([...cart, itemDetails]);
        }
    }

    return (
        <div>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row md={4}>
                    <Col>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                {categories.map((categoryDetails) => (
                                    <Nav.Link onSelect={handleOnClickCategoryName} eventKey={categoryDetails._id} key={categoryDetails._id}>{categoryDetails.name}</Nav.Link>
                                ))}
                            </Nav.Item>
                        </Nav>
                    </Col>
                    
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey={selectedCategoryId}>
                                {itemsList.map((itemDetails) => (
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={itemDetails.image} />
                                        <Card.Body>
                                            <Card.Title>{itemDetails.itemname}</Card.Title>
                                            <Card.Text>price: {itemDetails.price}$ <br />Quantity left:{itemDetails.noOfItems}
                                            </Card.Text>
                                            <Button variant="info">Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

            </Container>
            <button className="cart">Cart {cart.length}</button>
        </div>
    )
}

export { FixedSideBar };

//     <a href="#" onClick={handleOnClickCategoryName} name={categoryDetails._id}>{categoryDetails.name}</a>
{/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Sonnet />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Sonnet />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> */}