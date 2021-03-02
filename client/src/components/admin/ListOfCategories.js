import React from 'react';

const ListOfCategories = (props) => {

    return (
        <div className="displayCategories">
            <label >Choose a category:
            <select onChange={(e)=>{props.handleClick(e.target.value)}}>
                    {props.categories.map((el) => {
                        return <option key={el._id} value={el.name}>{el.name}</option>;
                    })};
            </select>
            </label>
        </div>
    )
}

export { ListOfCategories };
