import React,{useState} from 'react'
//has to get itemDetails from the ItemsDisplay addtocart
//  const [cart, setCart]=useState([]);
// const addToCart = (itemDetails)=>{
//     setCart([...cart, itemDetails]);
// }

const Header = () => {
    return (
        <div>
            <h1>Welcome! to Lucky's Grocery Market</h1>
            <button className="loginBtn" type="submit">Login</button>
            <button className="cart">Cart..</button>
        </div>
    )
}

export { Header }
