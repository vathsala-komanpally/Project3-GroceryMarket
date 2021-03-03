import React, { useState, useEffect } from 'react'
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";

const UpdateItem = () => {
    const [categories, setCategories] = useState([]);
    const [groceryItems, setGroceryItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [updateCategoryName, setUpdateCategoryName] = useState('');
    const [selectedItemName, setSelectedItemName] = useState({ itemname: '' });
    const [items, setItems]=useState({itemname:'',
    price:'',
    noOfItems:''});

    useEffect(() => {
        fetch('http://localhost:9000/api/groceryItems/category/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log("responses", response.data);
            return response.json();
        }).then((groceryCategories) => {
            console.log("grocery Categories", groceryCategories);
            setCategories(groceryCategories);
        });
    }, []);
    useEffect(()=>{
        setGroceryItems(groceryItems);
    },[groceryItems]);
    const handleClickCategory = (categoryId) => {
        console.log("categoryId:", categoryId);
        const CategoryId = { categoryId: categoryId };
        setSelectedCategoryId(CategoryId);
        const foundCategoryName = categories.find((element) => {
            return element._id === categoryId;
        });
        console.log("Choosen category name",foundCategoryName);
        setUpdateCategoryName(foundCategoryName.name);
        fetch(`http://localhost:9000/api/groceryItems/category/${categoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log("responses", response.data);
            return response.json();
        }).then((items) => {
            console.log("grocery Categories", items);
            setGroceryItems(items);
            console.log("Items List:", groceryItems);
        });
       
    }

    const handleClickItems=(itemName)=>{
        setSelectedItemName({itemname:itemName});
        console.log("Item Name choosen:",selectedItemName);
        items.itemname=itemName;
    }

    const handleChange=(e)=>{
        const newItemState={...items, [e.target.name]:e.target.value};
        setItems(newItemState);
    }

    const handleUpdateItemClick = () => {
        console.log("items updated are:",items);
        console.log("selected category Id is:", selectedCategoryId);
        const completeItemDetails = { ...items, ...selectedCategoryId };
        setGroceryItems(completeItemDetails);
        console.log("new Item details added",completeItemDetails);
        fetch(`http://localhost:9000/api/groceryItems/update-item/${completeItemDetails.categoryId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(completeItemDetails),
        }).then((response) => {
            console.log("responses", response);
        })
    }

    return (
        <div className="updateItem">
            <h1>Update items</h1>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />

            <div className="updateCategoryName">
                <label >Selected category name:
                <input className="selectedCategoryName" value={updateCategoryName} name="name" placeholder="Enter a name of category" />
                </label>
            </div>
            <ListOfItems groceryItems={groceryItems} handleClick={handleClickItems}/>
            <div className="itemDetails">
             <div className="ItemName">
                <label>Selected item name:
                <input name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add"  />
                </label>
            </div>

            <div className="ItemPrice">
                <label >Price
                <input name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item"/>
                </label>
            </div>
            <div className="no.OfItems">
                <label >Number Of Items
                <input name="noOfItems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items"/>
                </label>
            </div>
        </div>

            <button type="submit" onClick={handleUpdateItemClick} className="btn btn-primary">Update Item</button>
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
