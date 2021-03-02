import React from 'react'
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";
import { ItemDetails } from "./ItemDetails";

const UpdateItem = (props) => {
    const handleClickCategory=(categoryId)=>{
        console.log("categoryID:",categoryId);
    }
    return (
        <div className="updateItem">
            <h1>Update items</h1>
            <ListOfCategories categories={props.categories} handleClick={handleClickCategory}/>

            <div className="updateCategoryName">
                <label >Category name:</label>
                <input className="form-control" id="categoryname" placeholder="Enter a name of category" name="categoryname" />
            </div>
            <ListOfItems />
            <ItemDetails />

            <button type="submit" className="btn btn-primary">Update Item</button>
        </div>

    )
}

export { UpdateItem };
{/* <div className="updateItem">
<h1>Update items</h1>
<div className="displayCategories">
    <label >Choose a category:</label>
    <select name="categoryId" id="categories">
        <option value=""></option>
    </select>
</div>

<div className="updateCategoryName">
    <label >Category name:</label>
    <input className="form-control" id="categoryname" placeholder="Enter a name of category" name="categoryname" />
</div>
<div className="displayItemNames">
    <label>Choose an item:</label>
    <select className="categoryitemname" name="categoryItemName" id="categoryItems">
    </select>
</div>
<div className="updateItemName">
    <label>Name of item</label>
    <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
</div>
  <div className="updateItemName">
                <label>Name of item</label>
                <input name="itemname" className="form-control" id="itemname" placeholder="Enter a name of the item to add" />
            </div>

            <div className="updateItemPrice">
                <label>Price</label>
                <input name="price" className="form-control" id="price" placeholder="Enter a price of item" />
            </div>
            <div className="updateNo.OfItems">
                <label>Number Of Items</label>
                <input type="text" className="form-control" id="noofitems" placeholder="Enter no. of items" name="noofitems" />
            </div>
            <fieldset className="updateReadyToEat">
                <legend className="col-form-label">Ready to Eat?</legend>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatYes" name="readyToEat" value="true" />
                    <label >Yes</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="readyToEatNo" name="readyToEat" value="false" />
                    <label>No</label>
                </div></fieldset> */}
