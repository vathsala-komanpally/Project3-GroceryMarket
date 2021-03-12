import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'

const ItemsDisplay = ({match}, props) => {
    const [itemsList, setItemsList] = useState([]);
    const [cart, setCart] = useState([]);
   
    useEffect(()=>{
        console.log("props items List is:", match);
        fetch(`http://localhost:9000/api/groceryItems/category/${match.params.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }).then((response) => {
            return response.json();
          }).then((items) => {
            setItemsList(items);
          });
    },[]);

    const handleAddToCartOnClick = (itemDetails) => {
        setCart([...cart, itemDetails]);
        console.log("in item Details component:", cart);
        props.cart(cart);
    }
  
    return (
        <div>
             <CardGroup >
            {itemsList.map((itemDetails) => ( 
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
