import React,{useEffect, useState} from 'react'
import {ItemsDisplay} from './ItemsDisplay';

const FixedSideBar=()=> {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId]=useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/api/groceryItems/category/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            return response.json();
        }).then((groceryCategories) => {
            setCategories(groceryCategories);
        });
    }, []);

    const handleOnClickCategoryName=(e)=>{
      console.log("category Id is:",e.target.name);
        //<ItemsDisplay categoryId={e.target.name}/>
    }

    return (
        <div>
            
             {categories.map((categoryDetails)=>(
                <div className="Category-Name" key={categoryDetails._id}>
                 <a href="#" onClick={handleOnClickCategoryName} name={categoryDetails._id}>{categoryDetails.name}</a>
              </div>
            ))}
            
        </div>
    )
}

export {FixedSideBar};
