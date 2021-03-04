import React,{useEffect, useState} from 'react'

const ItemsDisplay=()=> {
    const [itemsList, setItemsList]=useState([]);
    const [cart, setCart]=useState([]);


    useEffect(()=>{
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
    },[]);

    const addToCart = (itemDetails)=>{
        setCart([...cart, itemDetails]);
    }

    return (
        <div className="DisplayItems">
            <header>
                <button className="cart">Cart {cart.length}</button>
                </header>
            {itemsList.map((itemDetails)=>(
                <div className="Item" key={itemDetails._id}>
                 <img className="imageOfItem" src={itemDetails.image} alt={itemDetails.itemname}/>
                 <h3>{itemDetails.itemname}</h3>
                 <h4>{itemDetails.price}$</h4>
                 <p>Quantity left:{itemDetails.noOfItems}</p>
                 <button onClick={()=>addToCart(itemDetails)}>Add to Cart</button>
              </div>
            ))}
        </div>
    )
}

export {ItemsDisplay};
