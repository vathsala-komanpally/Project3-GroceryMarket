import React from 'react';
import { useEffect, useState } from 'react';
import { ListOfCategories } from "./ListOfCategories";

const AddItem = (props) => {
    const [category, setCategory]=useState({name:''});
    const [newItems, setNewItems]=useState({itemname: '',
    price: '',
    noOfItems: '',
    readyToEat: ''});
    const [completeDetails, setCompleteDetails]=useState([]);
    useEffect(()=>{
        console.log("use effect to add new item");
        setCategory(category);
        setNewItems(newItems);
    },[category, newItems, completeDetails]);

    const handleClickCategory=(categoryName)=>{
        console.log("categoryName Selected is:",categoryName);
        setCategory(categoryName);
        console.log("categoryName Selected is:",category);
    }
    const handleChange=(e)=>{
        const newItemState={...setNewItems, [e.target.name]:e.target.value};
        setNewItems(newItemState);
    }

    const handleAddSubmit=()=>{
        const newDetails={...category};
        // has to work herre
        console.log("new Details", newDetails);
        setCompleteDetails(newDetails);
        
        fetch('http://localhost:9000/api/groceryItems/new-item',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDetails),
        }).then((response)=>{
            console.log("responses", response);
        });
    }

        
console.log("Add an Item",props.categories);
    return (
        <div className="addItem">
            <h1>Add new category/items</h1>
            <div className="addCategoryName">
                <h4>Add New Category:</h4>
                <label>Enter name of category:
                <input name="newcategoryname" className="newcategoryname" placeholder="Enter a name of category" />
                </label><br />
                <button type="submit" className="btnnewcategoryname" >Add category</button> or
            </div>

            <h4>Add New Items to the category:</h4>

            <ListOfCategories categories={props.categories} handleClick={handleClickCategory}/>

            <div className="itemDetails">
             <div className="ItemName">
                <label>Name of item:
                <input name="itemname" value={newItems.itemname} onChange={handleChange} placeholder="Enter a name of the item to add"  />
                </label>
            </div>

            <div className="ItemPrice">
                <label >Price
                <input name="price" value={newItems.price} onChange={handleChange} placeholder="Enter a price of item"  />
                </label>
            </div>
            <div className="no.OfItems">
                <label >Number Of Items
                <input name="noofitems" value={newItems.noOfItems} onChange={handleChange} placeholder="Enter no. of items"  />
                </label>
            </div>
            <fieldset className="ReadyToEat">
                <legend className="col-form-label">Ready to Eat?</legend>
                <div className="form-check form-check-inline">
                    <input  value={newItems.readyToEat} onChange={handleChange} type="radio" id="readyToEatYes" name="readyToEat" value="true" />
                    <label>Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input  value={newItems.readyToEat} onChange={handleChange} type="radio" id="readyToEatNo" name="readyToEat" value="false" />
                    <label >No</label>
                </div></fieldset>
        </div>

            <button type="submit" onClick={handleAddSubmit} className="btnAddItem">Add Item</button>
        </div>
    )
}

export { AddItem };

{/* <div className="addItemName">
                <label>Name of item:
                <input name="itemname" className="newitemname" placeholder="Enter a name of the item to add"  />
                </label>
            </div>

            <div className="addItemPrice">
                <label >Price
                <input name="price" className="newitemprice" placeholder="Enter a price of item"  />
                </label>
            </div>
            <div className="addNo.OfItems">
                <label >Number Of Items
                <input name="noofitems" className="noofitems" placeholder="Enter no. of items"  />
                </label>
            </div>
            <fieldset className="addReadyToEat">
                <legend className="col-form-label">Ready to Eat?</legend>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatYes" name="readyToEat" value="true" />
                    <label>Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatNo" name="readyToEat" value="false" />
                    <label >No</label>
                </div></fieldset> */}