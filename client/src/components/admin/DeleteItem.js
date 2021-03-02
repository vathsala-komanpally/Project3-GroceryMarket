import React from 'react'
const DeleteItem = () => {
    return (

        <div className="deleteItem">
            <h1>Delete items</h1>
            <div className="displayCategories">
                <label >Choose a category:</label>
                <select name="categoryId" id="categories">
                    <option value=""></option>
                </select>
            </div>

            <div className="deleteCategoryName">
                <label >Category name:</label>
                <input className="form-control" id="categoryname" placeholder="Enter a name of category" name="categoryname" />
            </div>
            <div className="displayItemNames">
                <label >Choose an item:</label>
                <select className="categoryitemname" name="categoryItemName" id="categoryItems">
                </select>
            </div>
            <div className="deleteItemName">
                <label>Name of item</label>
                <input className="form-control" id="itemname" placeholder="Enter a name of the item to add" name="itemname" />
            </div>
            <button type="submit" className="btn btn-primary">Delete Item</button>
        </div>
    )
}

export { DeleteItem };
