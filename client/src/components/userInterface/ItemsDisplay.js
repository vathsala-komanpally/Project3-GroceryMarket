import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';

const ItemsDisplay = (props) => {
    const [itemsList, setItemsList] = useState([]);
    const [cart, setCart] = useState([]);

console.log("props category Id is:",props.categoryId);
    useEffect(() => {
        fetch(`http://localhost:9000/api/groceryItems/category/${props.categoryId}`, {
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
    console.log("props category Id is:",itemsList);

    return (
        <div >
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