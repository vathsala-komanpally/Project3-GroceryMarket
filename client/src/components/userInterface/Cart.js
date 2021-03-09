import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'


const Cart = (props) => {
    const [cart, setCart] = useState([]);

   console.log("here");

    // const handleAddToCartOnClick = (itemDetails) => {
    //     setCart([...cart, itemDetails]);
    //     console.log("in item Details component:", cart);
    //     props.cart(cart);
    // }


    return (
        <div>
             <CardGroup>
            {props.cart.map((itemDetails) => ( 
                <CardGroup key={itemDetails._id}>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={itemDetails.image} style={{ width: 285, height: 200 }} />
                        <Card.Body>
                            <Card.Title>{itemDetails.itemname}</Card.Title>
                            <Card.Text>price: {itemDetails.price}$ <br />Quantity left:{itemDetails.noOfItems}
                            </Card.Text>
                            <Button variant="info">Remove</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
             
            ))}
            </CardGroup>
        </div>
    )
}

export { Cart };
