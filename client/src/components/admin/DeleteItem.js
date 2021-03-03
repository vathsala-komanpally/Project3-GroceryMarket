import React,{useEffect, useState} from 'react';
import { ListOfCategories } from "./ListOfCategories";
import { ListOfItems } from "./ListOfItems";

const DeleteItem = () => {
    const [categories, setCategories] = useState([]);
    const [groceryItems, setGroceryItems] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState({ categoryId: '' });
    const [updateCategoryName, setUpdateCategoryName] = useState('');
    const [selectedItemName, setSelectedItemName] = useState({ itemname: '' });
    const [selectedItemId, setSelectedItemId] = useState('');
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
    const handleDeleteCategoryNameSubmit=()=>{
        fetch(`http://localhost:9000/api/groceryItems/delete-category/${selectedCategoryId.categoryId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log("responses", response);
        })
    }

    const handleClickItems=(itemName)=>{
        setSelectedItemName({itemname:itemName});
        const foundItemId = groceryItems.find((element) => {
            return element.itemname === itemName;
        });

        console.log("Item Name choosen ID:",foundItemId);
        setSelectedItemId(foundItemId);
    }
    const handleDeleteItemNameSubmit=()=>{
        console.log("selected item ID is:",selectedItemId);
        fetch(`http://localhost:9000/api/groceryItems/delete-item/${selectedItemId._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log("responses", response);
        })
    }
    return (
        <div className="deleteItem">
            <h1>Delete</h1>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />

            <div className="deleteCategoryName">
            <button type="submit" onClick={handleDeleteCategoryNameSubmit} >Delete category</button> or
            </div>
            <ListOfItems itemsList={groceryItems} handleClick={handleClickItems}/>

            <div className="deleteItemName">
            <button type="submit" onClick={handleDeleteItemNameSubmit} >Delete Item</button>
            </div>

        </div>
    )
}

export { DeleteItem };
