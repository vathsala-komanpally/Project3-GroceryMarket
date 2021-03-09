import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'



const ItemsDisplay = (props) => {
    const [cart, setCart] = useState([]);

    console.log("props items List is:", props.itemsList);

    const handleAddToCartOnClick = (itemDetails) => {
        setCart([...cart, itemDetails]);
        console.log("in item Details component:", cart);
        props.cart(cart);
    }
  
    

    return (
        <div>
            {/* <header>
                <button className="cart">Cart {cart.length}</button>
            </header> */}
             <CardGroup >
            {props.itemsList.map((itemDetails) => ( 
                <CardGroup key={itemDetails._id}>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={itemDetails.image} style={{ width: 285, height: 200 }} />
                        <Card.Body>
                            <Card.Title>{itemDetails.itemname}</Card.Title>
                            <Card.Text>price: {itemDetails.price}$ <br />Quantity left:{itemDetails.noOfItems}
                            </Card.Text>
                            <Button variant="info" onClick={()=>handleAddToCartOnClick(itemDetails)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
             
            ))}
            </CardGroup>
        </div>
    )
}

export { ItemsDisplay };
// {itemsList.map((itemDetails) => (
//     <div className="Item" key={itemDetails._id}>
//         <img className="imageOfItem" src={itemDetails.image} alt={itemDetails.itemname} />
//         <h3>{itemDetails.itemname}</h3>
//         <h4>{itemDetails.price}$</h4>
//         <p>Quantity left:{itemDetails.noOfItems}</p>
//         <button onClick={() => addToCart(itemDetails)}>Add to Cart</button>
//     </div>
// ))}