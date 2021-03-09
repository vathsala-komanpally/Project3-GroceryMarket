import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'


const Cart = (props) => {
    //do filter on props.cart to find repeated items in the list then add key Quantity:1
        //increases Quantity if added more times..increase the price and print those values here....
        //props.cart.find(repeated items){times repeated increase quantity and price}
    const [cart, setCart] = useState([]);

    const handlePlus=(cartItem)=>{
        //cartItem
        setCart([...cart,cartItem]);
    }
    console.log("here hello:",cart);

    const handleDelete=(cartItem)=>{
        
    }

    
    const handleMinus=(cartItem)=>{
        
    }
    return (
        
        <div>
            <h2>Items added to the cart:</h2>
             <CardGroup>
            {props.cart.map((itemDetails) => ( 
                <CardGroup key={itemDetails._id}>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={itemDetails.image} style={{ width: 285, height: 200 }} />
                        <Card.Body>
                            <Card.Title>{itemDetails.itemname}</Card.Title>
                            <Card.Text>price: {itemDetails.price}$ <br />Quantity:{itemDetails.noOfItems}
                            </Card.Text>
                            <Button variant="outline-info" onClick={()=>{handlePlus(itemDetails)}}>+</Button>
                            <Button variant="info" onClick={()=>{handleDelete(itemDetails)}}>Delete</Button>
                            <Button variant="outline-info" onClick={()=>{handleMinus(itemDetails)}}>-</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
             
            ))}
            </CardGroup>
        </div>
    )
}

export { Cart };
