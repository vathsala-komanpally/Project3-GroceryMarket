import React from 'react';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {AddItem} from "./AddItem";
import {UpdateItem} from "./UpdateItem";
import {DeleteItem} from "./DeleteItem";

const OperationsOfAdmin = () => { 
    const [categories, setCategories]=useState([]);
    //const [items, setItems]=useState([]);
    //const [categoryAdd, setCategoryAdd]=useState([]);
    //const [categoryUpdate, setCategoryUpdate]=useState([]);


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

    const handleCategoriesClick=(categoryID)=>{
       const selectedCategory= categories.find(categoryID);
      //setCategoryUpdate(selectedCategory);
    }
    return (
        <Router>
        <div className="operationsofadmin">
            <h2>List of things Admin can do here:</h2>
            <div className="addItemInfoUser">
                <p className="addItemInfo">Click on Add: <br/>
                To add a new category name/item name in there or <br/>
                To add new item in the existing category name<br/>
                </p>
                <Link to="/admin/operations/addItem">
                <button type="button" id="add" className="btn btn-primary" >Add</button>
                </Link>
            </div>
            <div className="updateItemInfoUser">
                <p className="updateItemInfo">Click on update: <br/>
                To update existing category or item deatils <br/>
                </p>
                <Link to="/admin/operations/updateItem">
                <button type="button" id="update" className="btn btn-primary">Update</button>
                </Link>
                
            </div>
          
            <div className="deleteItemInfoUser">
                <p className="deleteItemInfo">Click on Delete: <br/>
                To delete a category or any item from particular category<br/>
                </p>
                <Link to="/admin/operations/deleteItem">
                <button type="button" id="delete" className="btn btn-primary">Delete</button>
                </Link>
                
            </div>
        </div>
        
        <Switch>
            <Route path="/admin/operations/addItem"><AddItem categories={categories}/></Route>
            <Route path="/admin/operations/updateItem"><UpdateItem categories={categories}/></Route>
            <Route path="/admin/operations/deleteItem"><DeleteItem /></Route>
            </Switch>
        </Router>
    )
}

export {OperationsOfAdmin};
