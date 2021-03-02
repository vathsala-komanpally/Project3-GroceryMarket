import React from 'react';
import { useEffect, useState } from 'react';
import { ListOfCategories } from "./ListOfCategories";
import { ItemDetails } from "./ItemDetails";

const AddItem = (props) => {
    const [categoryName, setCategoryName] = useState({ name: '' });
    const [category, setCategory] = useState({ categoryId: '' });
    const [newItems, setNewItems] = useState({});
    const [groceryItem, setGroceryItem] = useState({});
    //const [categoriesList, setCategoriesList] = useState([]);
    const [categories, setCategories]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:9000/api/groceryItems/category/all',{
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                },
            }).then((response)=>{
                console.log("responses", response.data);
                return response.json();
            }).then((groceryCategories)=>{
                console.log("grocery Categories",groceryCategories);
                setCategories(groceryCategories);
            });
        },[]);


    useEffect(() => {
        setNewItems(newItems); 
    }, [newItems]);

    const handleAddCategoryNameSubmit = () => {
        //console.log("category name:", categoriesList);
        // may be paste categoryId here then change t
        // newCategory ID is here add that or name here
        fetch('http://localhost:9000/api/groceryItems/category', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryName),
        }).then((response) => {
            console.log("responses", response);
            return response.json();
        }).then((groceryCategory) => {
            console.log("grocery Categories", groceryCategory);
            const addedCategories=[...categories];
            addedCategories.push(groceryCategory);
            setCategories(addedCategories);
        });
    }

    const handleClickCategory = (categoryId) => {
        console.log("categoryId:", categoryId);
        const newCategory = { categoryId: categoryId };
        setCategory(newCategory);
    }

    const handleItemDetails = (items) => {
        setNewItems(items);
        console.log("newItems", newItems);
    }
    const handleAddItemClick = () => {
        const completeItemDetails = { ...newItems, ...category };
        setGroceryItem(completeItemDetails);
        fetch('http://localhost:9000/api/groceryItems/new-item', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(completeItemDetails),
        }).then((response) => {
            console.log("responses", response);
        });
    }

    return (
        <div className="addItem">
            <h1>Add new category/items</h1>
            <div className="addCategoryName">
                <h4>Add New Category:</h4>
                <label>Enter name of category:
                <input name="name" onChange={(e) => { setCategoryName({ [e.target.name]: e.target.value }) }} className="newcategoryname" placeholder="Enter a name of category" />
                </label><br />
                <button type="submit" onClick={handleAddCategoryNameSubmit} className="btnnewcategoryname" >Add category</button> or
            </div>

            <h4>Add New Items to the category:</h4>
            <ListOfCategories categories={categories} handleClick={handleClickCategory} />
            <ItemDetails entered={handleItemDetails} />

            <button type="submit" onClick={handleAddItemClick} className="btnAddItem">Add Item</button>
        </div>
    )
}

export { AddItem };