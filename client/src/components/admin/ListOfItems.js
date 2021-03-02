import React from 'react';

const ListOfItems = (props) => {
    return (
        <div className="displayItems">
            <label >Choose an Item:</label>
            <select name="itemId" id="items">
                {props.items.map((element)=>{
                    <option key={element._ID} onClick={()=>{props.handleClick(element._ID)}}>{element.name}</option>
            })}
            </select>
        </div>
    )
}

export { ListOfItems };