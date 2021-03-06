import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';

const ItemsDisplay = (props) => {
    const [itemsList, setItemsList] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('http://localhost:9000/api/groceryItems/category/603f8fb5dae57803ce3660bb', {
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
    }, []);

    const addToCart = (itemDetails) => {
        setCart([...cart, itemDetails]);
    }

    return (
        <div className="displayItems">
            <header>
                <button className="cart">Cart {cart.length}</button>
            </header>
           
            {itemsList.map((itemDetails) => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemDetails.image}/>
                <Card.Body>
                    <Card.Title>{itemDetails.itemname}</Card.Title>
                    <Card.Text>price: {itemDetails.price}$ <br/>
                    Quantity left:{itemDetails.noOfItems}
                     </Card.Text>
                    <Button variant="info" onClick={() => addToCart(itemDetails)}>Add to Cart</Button>
                </Card.Body>
            </Card>
            ))}
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