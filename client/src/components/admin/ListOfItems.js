import React from 'react';

const ListOfItems = (props) => {
    console.log("props of list of items", props.groceryItems);
    return (
        <div className="displayItems">
            <label >Items in that category are:
            <select onChange={(e)=>{props.handleClick(e.target.value)}}>
                    {props.groceryItems.map((el) => {
                        return <option key={el._id} value={el.name}>{el.itemname}</option>;
                    })};
            </select>
            </label>
        </div>
    )
}

export { ListOfItems };